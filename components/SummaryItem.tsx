import React, { Fragment } from "react";

type PropsType = {
  header: string;
  detail: string;
};

function displayHeader(header: string): string {
  const arr = header.split("_");
  arr.forEach(
    (each, index) => (arr[index] = each.charAt(0).toUpperCase() + each.slice(1))
  );
  return arr.join(" ");
}

function displayDetail(detail: string | string[]): string | JSX.Element[] {
  if (typeof detail === "string") {
    return detail;
  } else {
    return detail.map((each, index) => <p key={index}>{each}</p>);
  }
}

function SummaryItem({ header, detail }: PropsType) {
  return (
    <div className="flex items-center tracking-wide">
      {header === "color" && (
        <Fragment>
          <b className="md:text-lg lg:text-xl">
            {displayHeader(header)}&nbsp;:&nbsp;
          </b>
          <div
            className={`w-5 h-5 rounded-full`}
            style={{ background: detail }}
          />
        </Fragment>
      )}
      {header !== "color" && (
        <Fragment>
          <b className="md:text-lg lg:text-xl">
            {displayHeader(header)}&nbsp;:&nbsp;
          </b>
          <div>{displayDetail(detail)}</div>
        </Fragment>
      )}
    </div>
  );
}

export default SummaryItem;
