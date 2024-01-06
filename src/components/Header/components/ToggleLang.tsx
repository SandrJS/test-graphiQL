import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ToggleLang.module.scss';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
  };
  

  return (
    <select
      className={styles.switcher}
      onChange={handleChangeLanguage}
      defaultValue={i18n.language}
    >
      <option value="en">En</option>
      <option value="ru">Ru</option>
    </select>
  );
};

export default LanguageSwitcher;
