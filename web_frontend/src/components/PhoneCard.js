import React from "react";
import "./PhoneCard.css";

// PUBLIC_INTERFACE
function PhoneCard({ phone }) {
  /** Renders a phone card with image, name, and short description. */
  return (
    <div className="phone-card" tabIndex={0}>
      <div className="phone-card__image-wrap">
        <img
          className="phone-card__image"
          src={phone.image}
          alt={phone.name}
          loading="lazy"
        />
      </div>
      <div className="phone-card__info">
        <h3 className="phone-card__name">{phone.name}</h3>
        <p className="phone-card__desc">{phone.shortDescription}</p>
      </div>
    </div>
  );
}

export default PhoneCard;
