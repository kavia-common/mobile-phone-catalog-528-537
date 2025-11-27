import React, { forwardRef } from "react";
import "./PhoneCard.css";

// PUBLIC_INTERFACE
const PhoneCard = forwardRef(
  (
    {
      phone,
      tabIndex = 0,
      isFavorite = false,
      onFavoriteToggle,
      onKeyDown,
      dataIndex,
    },
    ref
  ) => {
    /** Renders a phone card with image, name, and short description.
     * Adds ARIA/focus/favorite support.
     */
    return (
      <div
        className="phone-card"
        tabIndex={tabIndex}
        ref={ref}
        role="listitem"
        aria-label={phone.name}
        aria-pressed={isFavorite ? "true" : "false"}
        data-index={dataIndex}
        onKeyDown={onKeyDown}
        style={{
          border:
            isFavorite && "#ffd700" ? "2.5px solid #ffd700" : undefined,
          outline: "none"
        }}
      >
        <div className="phone-card__image-wrap">
          <img
            className="phone-card__image"
            src={phone.image}
            alt={phone.name}
            loading="lazy"
            width={80}
            height={120}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="phone-card__info">
          <h3 className="phone-card__name">
            {phone.name}{" "}
            <button
              type="button"
              className={isFavorite ? "fav-btn active" : "fav-btn"}
              title={isFavorite ? "Remove from favorites" : "Add to favorites"}
              aria-label={isFavorite ? `Unfavorite ${phone.name}` : `Favorite ${phone.name}`}
              aria-pressed={isFavorite}
              onClick={e => {
                e.stopPropagation();
                onFavoriteToggle?.();
              }}
              tabIndex={0}
            >
              {isFavorite ? "★" : "☆"}
            </button>
          </h3>
          <p className="phone-card__desc">{phone.shortDescription}</p>
        </div>
      </div>
    );
  }
);

export default React.memo(PhoneCard);
