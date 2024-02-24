import React from "react";
import classes from "./MainComponent.module.css";
const MainComponent = ({ centerBoxBg, mainTitle, data }) => {
  const cards = data.slice(0, 6);
  const firstSlice =
    data.length === 3 || data.length === 4
      ? 2
      : data.length === 5 || data.length === 6
      ? 3
      : 1;
  const secondSlice =
    data.length === 3
      ? 1
      : data.length === 4 || data.length === 5
      ? 2
      : data.length === 6
      ? 3
      : 1;
  return (
    <div
      className="min-h-screen flex items-center justify-center w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div
        className={[
          classes.mainWrapper,
          classes[`mainWrapper${data.length}`],
        ].join(" ")}
        style={{ "--bg": centerBoxBg }}
      >
        <div className={[classes.wrapper, classes.wrapper1].join(" ")}>
          {" "}
          {cards
            .slice(0, firstSlice)
            .map(
              (
                {
                  bg,
                  border,
                  boxShadow,
                  idContainer,
                  title,
                  titleColor,
                  lists,
                },
                i
              ) => (
                <div
                  className={[classes.card, classes[`card${i + 1}`]].join(" ")}
                  key={i}
                  style={{
                    "--bg": bg,
                    "--border": border,
                    "--boxShadow": boxShadow,
                  }}
                >
                  {" "}
                  <h2
                    className={classes.id}
                    style={{
                      "--bg": idContainer.bg,
                      "--border": idContainer.border,
                      "--boxShadow": idContainer.boxShadow,
                    }}
                  >
                    {i + 1}
                  </h2>
                  <h4
                    className={classes.title}
                    style={{ "--color": titleColor }}
                  >
                    {title}
                  </h4>
                  <div className={classes.listContainer}>
                    {lists.map((list, i) => (
                      <div
                        className={classes.list}
                        key={i}
                        style={{ "--bg": list.bg }}
                      >
                        <p
                          className={classes.text}
                          style={{ "--color": list.textColor }}
                        >
                          {list.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
        </div>
        <div
          className={classes.mainTitle}
          style={{ "--bg": mainTitle.bg, "--border": mainTitle.border }}
        >
          <h1
            className={classes.title}
            style={{ "--color": mainTitle.titleColor }}
          >
            {mainTitle.title}
          </h1>
        </div>{" "}
        <div className={[classes.wrapper, classes.wrapper2].join(" ")}>
          {" "}
          {cards
            .slice(-secondSlice)
            .map(
              (
                {
                  bg,
                  border,
                  boxShadow,
                  idContainer,
                  title,
                  titleColor,
                  lists,
                },
                i
              ) => (
                <div
                  className={[
                    classes.card,
                    classes[`card${i + firstSlice + 1}`],
                  ].join(" ")}
                  key={i}
                  style={{
                    "--bg": bg,
                    "--border": border,
                    "--boxShadow": boxShadow,
                  }}
                >
                  {" "}
                  <h2
                    className={classes.id}
                    style={{
                      "--bg": idContainer.bg,
                      "--border": idContainer.border,
                      "--boxShadow": idContainer.boxShadow,
                    }}
                  >
                    {i + firstSlice + 1}
                  </h2>
                  <h4
                    className={classes.title}
                    style={{ "--color": titleColor }}
                  >
                    {title}
                  </h4>
                  <div className={classes.listContainer}>
                    {lists.map((list, i) => (
                      <div
                        className={classes.list}
                        key={i}
                        style={{ "--bg": list.bg }}
                      >
                        <p
                          className={classes.text}
                          style={{ "--color": list.textColor }}
                        >
                          {list.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
