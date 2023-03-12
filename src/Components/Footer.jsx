import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full bg-cyan-400 text-white">
      <div className="text-center py-3 mx-auto">
        <Link to="/"> 2023 © Fearless News.</Link> All Right Reserve.
      </div>
    </div>
  );
};
