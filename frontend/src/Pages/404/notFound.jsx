import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { matchPath } from "react-router-dom";
import "./notFound.css";

const NotFoundPage = () => {
  const location = useLocation();

  // Periksa apakah halaman berasal dari area admin
  const isAdminPage = matchPath("/admin/*", location.pathname);

  return (
    <div className={`notfound-container ${isAdminPage ? "notfound-admin" : "notfound-user"}`}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">
          {isAdminPage
            ? "Oops! The admin page you are looking for does not exist."
            : "Oops! The page you are looking for does not exist."}
        </p>
        <Link to={isAdminPage ? "/admin/dashboard" : "/"} className="notfound-button">
          {isAdminPage ? "Go to Dashboard" : "Go Back Home"}
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
