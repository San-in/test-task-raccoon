import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useField } from 'formik';
import CustomText from '../CustomText';
import './styles.scss';

const PhotoUploader: React.FC = () => {
  const [selectedFileName, setSelectedFileName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [field, meta, helpers] = useField('photo');

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (meta.error && meta.touched) {
      setError(meta.error);
    }
  }, [meta]);
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        if (e.target) {
          setSelectedFileName(file.name);
          setError('');
          helpers.setValue(file);
        }
      };
      reader.onerror = function () {
        setError('Error loading the image');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className={'photo-uploader__container'}>
        <button
          className={`photo-uploader__button ${error ? 'border__error' : 'border__main'}`}
          onClick={handleButtonClick}
          type={'button'}
        >
          <CustomText>Upload</CustomText>
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className={'hidden'}
          onChange={handleFileChange}
        />

        <div
          className={`photo-uploader__content-box ${error ? 'border__error' : 'border__secondary'}`}
        >
          {!error && selectedFileName && field.value ? (
            <CustomText textAlign={'start'}>{selectedFileName}</CustomText>
          ) : (
            <CustomText textAlign={'start'} color={'secondary'}>
              Upload your photo
            </CustomText>
          )}
        </div>
      </div>
      {error && (
        <div className={'input-helper-text-wrapper'}>
          <CustomText size={'small'} textAlign={'start'} color={'error'}>
            {error}
          </CustomText>
        </div>
      )}
    </>
  );
};

export default PhotoUploader;
