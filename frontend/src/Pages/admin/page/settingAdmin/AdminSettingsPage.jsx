import React from 'react';
import './AdminSettingsPage.css';

import HeaderAdmin from "../../componen/Header/headerAdmin";

const AdminSettingsPage = () => {
  return (
<div className="dashboard-container">
<HeaderAdmin title="Setting" />
    <div className="admin-settings">
        <h2 className="admin-settings__title">General Settings</h2>
        <div className="admin-settings__form">
            <div className="admin-settings__row">
            <label htmlFor="logo" className="admin-settings__label">Upload Logo</label>
            <div className="admin-settings__input-wrapper">
                <button className="admin-settings__upload-button">
                <i className="admin-settings__upload-icon"></i>
                Upload Logo
                </button>
            </div>
            </div>
            <div className="admin-settings__row">
            <label htmlFor="site-name" className="admin-settings__label">Site Name</label>
            <div className="admin-settings__input-wrapper">
                <input type="text" id="site-name" name="site-name" className="admin-settings__input" defaultValue="Bright Web" />
            </div>
            </div>
            <div className="admin-settings__row">
            <label htmlFor="copyright" className="admin-settings__label">Copy Right</label>
            <div className="admin-settings__input-wrapper">
                <input type="text" id="copyright" name="copyright" className="admin-settings__input" defaultValue="All rights Reserved@brightweb" />
            </div>
            </div>
            <div className="admin-settings__row">
            <label htmlFor="seo-title" className="admin-settings__label">SEO Title</label>
            <div className="admin-settings__input-wrapper">
                <input type="text" id="seo-title" name="seo-title" className="admin-settings__input" defaultValue="Bright web is a hybrid dashboard" />
            </div>
            </div>
            <div className="admin-settings__row">
            <label htmlFor="seo-description" className="admin-settings__label">SEO Description</label>
            <div className="admin-settings__input-wrapper">
                <textarea id="seo-description" name="seo-description" className="admin-settings__textarea" defaultValue="Bright web is a hybrid dashboard"></textarea>
            </div>
            </div>
            <div className="admin-settings__row">
            <label htmlFor="seo-keywords" className="admin-settings__label">SEO Keywords</label>
            <div className="admin-settings__input-wrapper">
                <input type="text" id="seo-keywords" name="seo-keywords" className="admin-settings__input" defaultValue="CEO" />
            </div>
            </div>
            <div className="admin-settings__actions">
            <button className="admin-settings__save-button">Simpan Perubahan</button>
            </div>
        </div>
        </div>
</div>
  );
};

export default AdminSettingsPage;