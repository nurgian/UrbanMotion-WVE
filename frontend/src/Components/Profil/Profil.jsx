export const Profil = ({ className, ...props }) => {
  return (
    <img
      className={
        "shrink-0 w-[38px] h-[38px] relative overflow-visible " + className
      }
      src="profil.svg"
    />
  );
};
