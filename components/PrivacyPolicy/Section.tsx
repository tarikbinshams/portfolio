import React from "react";
import styles from "@styles/Terms.module.css";
import TermsAndConditons from "@contents/TermsAndConditons";
interface Props {
  terms: any;
}
export const Sections: React.FC<Props> = ({ terms }) => {
  const toRoman = (num: number): string => {
    const romanNumerals: Record<string, number> = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    let result = "";
    for (let key in romanNumerals) {
      while (num >= romanNumerals[key]) {
        result += key;
        num -= romanNumerals[key];
      }
    }
    return result;
  };

  return (
    <div>
      {terms?.map((term: any, index: any) => {
        return (
          <div key={index} className="t-my-12">
            <div
              className={`t-text-[24px] t-font-[sans-regular] ${styles.textShadow}`}
            >
              {term?.title}
            </div>{" "}
            {term?.type === "list" ? (
              <>
                <div
                  className={`
                    t-font-[sans-regular] t-text-[16px]  t-text-justify t-leading-8 t-pt-7 `}
                >
                  {term.description.top}
                </div>
                <div
                  className={`
                    t-font-[sans-regular] t-text-[16px]  t-text-justify t-leading-8 t-pt-7 `}
                >
                  {term.description.listHeader}
                </div>
                <ul
                  className={`
                    t-font-[sans-regular] t-text-[16px]  t-text-justify t-leading-8 t-pt-2 t-list-disc t-list-[fill: #2B79D3] t-space-y-4 t-pl-5  `}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: term.description.list }}
                  />
                </ul>
                <div
                  className={`
                    t-font-[sans-regular] t-text-[16px]  t-text-justify t-leading-8 t-pt-7 `}
                >
                  {term.description.bottom}
                </div>
              </>
            ) : term?.type === "roman" ? (
              <>
                <div
                  className={`
                    t-font-[sans-regular] t-text-[16px]  t-text-justify t-leading-8 t-pt-7 `}
                >
                  {term.description.top}
                </div>
                {/* <div
                  className={`
                    t-font-[sans-regular] t-text-[16px]  t-text-justify t-leading-8 t-pt-7 `}
                >
                  {term.description.listHeader}
                </div> */}
                <ul>
                  {term.description.list.map((item: any, index: any) => (
                    <li
                      key={index}
                      className="t-font-[sans-regular] t-text-[16px]  t-text-justify t-leading-8"
                    >
                      ({toRoman(index + 1)}) {item}
                    </li>
                  ))}
                </ul>
              </>
            ) : term?.type === "keyValue" ? (
              <div className="t-pt-7">
                {term?.description?.map((des: any, i: any) => {
                  return (
                    <div key={i} className="t-pt-4">
                      <div>
                        <span className="t-font-[sans-bold] t-text-[16px]  t-text-justify t-leading-8">
                          {des.title}
                        </span>
                        <span
                          className="t-font-[sans-regular] t-text-[16px]  t-text-justify t-leading-8 t-pl-2"
                          dangerouslySetInnerHTML={{
                            __html: des.value,
                          }}
                        />
                      </div>
                      {des?.type === "list" && (
                        <>
                          <span className="t-font-[sans-regular] t-text-[16px]   t-text-justify t-leading-8">
                            {des.listHeader}
                          </span>
                          <ul
                            className={`t-font-[sans-regular] t-text-[16px]  t-text-justify t-leading-8  t-list-disc t-list-[fill: #2B79D3] t-space-y-4 t-pl-5  `}
                          >
                            <div
                              dangerouslySetInnerHTML={{
                                __html: des.list,
                              }}
                              className="t-py-1"
                            />
                          </ul>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <>
                {term.description.map((d: any, i: any) => {
                  return (
                    <div
                      key={i}
                      className={`${d.type === "bold" && "t-font-[sans-bold]"} 
                    ${d.type === "capitalize" && "t-capitalize"}
                    t-font-[sans-regular] t-text-[16px]  t-text-justify t-leading-8 t-pt-7 `}
                    >
                      {d.title}
                    </div>
                  );
                })}
                {term?.description2?.map((des: any, i: any) => {
                  return (
                    <div key={i} className="t-pt-4">
                      <div>
                        <span className="t-font-[sans-bold] t-text-[16px]   t-text-justify t-leading-8">
                          {des.title}
                        </span>
                        <span
                          className="t-font-[sans-regular] t-text-[16px]  t-text-justify t-leading-8 t-pl-2"
                          dangerouslySetInnerHTML={{
                            __html: des.value,
                          }}
                        />
                      </div>
                      {des?.type === "list" && (
                        <>
                          <span className="t-font-[sans-regular] t-text-[16px]   t-text-justify t-leading-8">
                            {des.listHeader}
                          </span>
                          <ul
                            className={`t-font-[sans-regular] t-text-[16px]  t-text-justify t-leading-8  t-list-disc t-list-[fill: #2B79D3] t-space-y-4 t-pl-5  `}
                          >
                            <div
                              dangerouslySetInnerHTML={{
                                __html: des.list,
                              }}
                              className="t-py-1"
                            />
                          </ul>
                        </>
                      )}
                    </div>
                  );
                })}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
