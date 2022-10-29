import { ComponentType, SVGProps } from "react";

type PropTypes = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  //   title: string;
};

function HeaderItem({ Icon }: PropTypes) {
  return (
    <div className="flex flex-col items-center group cursor-pointer w-12 sm:w-20">
      <Icon className="h-10" />
      {/* <p className="opacity-100 trackign-widest group-hover:opacity-100">
        {title}
      </p> */}
    </div>
  );
}

export default HeaderItem;
