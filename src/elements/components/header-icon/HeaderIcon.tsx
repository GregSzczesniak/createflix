import React from "react";

interface IHeaderIconProps {
  /**
   * Link to external page
   */
  link: string;

  /**
   * Image used as link icon
   */
  icon: string;

  /**
   * Description for icon
   */
  alt?: string;
}

export default function HeaderIcon({ ...props }: IHeaderIconProps) {
  const { link, icon, alt } = props;

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img className={["w-10", "h-auto"].join(" ")} src={icon} alt={alt} />
    </a>
  );
}

HeaderIcon.defaultProps = {
  alt: "",
};
