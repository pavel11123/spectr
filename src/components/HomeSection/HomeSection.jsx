import s from "./HomeSection.module.scss";
import cn from "classnames";
import React, { useRef } from "react";
import triangle from "./assets/images/photo/triangle.svg";
import triangleTwo from "./assets/images/photo/triangleTwo.svg";
import triangleThree from "./assets/images/photo/triangleThree.svg";
import triangleFour from "./assets/images/photo/triangleFour.svg";
import { Link } from "react-scroll";
import {
  motion,
  useViewportScroll,
  useTransform,
  useScroll,
} from "framer-motion";

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const lineAnimation1 = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    width: 85,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const lineAnimation2 = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    width: 96,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const lineAnimation3 = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    width: 212,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const smallSquare = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { duration: 0.2, delay: custom * 0.3 },
  }),
};

const bigSquare1 = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    height: 133,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const bigSquare2 = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    width: 133,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const bigSquare3 = {
  hidden: {
    opacity: 0,
    height: 0,
    transform: "translateY(278px) scale(1, -1)",
  },
  visible: (custom) => ({
    opacity: 1,
    height: 133,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const bigSquare4 = {
  hidden: {
    opacity: 0,
    width: 0,
    transform: "translateX(1433px) scale(-1, 1)",
  },
  visible: (custom) => ({
    opacity: 1,
    width: 133,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const opacityAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const triangleOneAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const triangleTwoAnimation = {
  hidden: {
    y: 11,
    x: -19,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const triangleThreeAnimation = {
  hidden: {
    y: 27,
    x: -40,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const triangleFourAnimation = {
  hidden: {
    y: 37,
    x: -60,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const triangleOneAnimation2 = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const triangleTwoAnimation2 = {
  hidden: {
    y: 22,
    x: 16,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const triangleThreeAnimation2 = {
  hidden: {
    y: 48,
    x: 28,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const triangleFourAnimation2 = {
  hidden: {
    y: 74,
    x: 42,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: custom * 0.3 },
  }),
};

const HomeSection = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
  });
  let y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
  return (
    <motion.div
      className={cn(s.homeSection)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="d-fl-col homeSection__container">
        <div className={cn(s.wrapperTitle, "d-fl-col")}>
          <motion.span
            className={s.titleOne}
            variants={textAnimation}
            custom={2}
          >
            Делать сложное ––
          </motion.span>
          <motion.div
            className={s.wordAbsolute}
            variants={textAnimation}
            custom={2.3}
          >
            <svg
              width="725"
              height="145"
              viewBox="0 0 725 145"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="path-1-outside-1_1006_2298"
                maskUnits="userSpaceOnUse"
                x="0.599976"
                y="24.608"
                width="704"
                height="96"
                fill="black"
              >
                <rect
                  fill="white"
                  x="0.599976"
                  y="24.608"
                  width="704"
                  height="96"
                />
                <path d="M1.59998 117V27.4H85.696V117H60.608V47.496H26.56V117H1.59998Z" />
                <path d="M130.45 117V27.4H171.41C179.602 27.4 186.642 28.7227 192.53 31.368C198.503 34.0133 203.111 37.8533 206.354 42.888C209.597 47.8373 211.218 53.7253 211.218 60.552C211.218 67.2933 209.597 73.1387 206.354 78.088C203.111 83.0373 198.503 86.8773 192.53 89.608C186.642 92.2533 179.602 93.576 171.41 93.576H155.794V82.568V117H130.45ZM155.794 85.256V73.608H169.874C175.165 73.608 179.09 72.456 181.65 70.152C184.295 67.848 185.618 64.648 185.618 60.552C185.618 56.3707 184.295 53.128 181.65 50.824C179.09 48.52 175.165 47.368 169.874 47.368H155.794V85.256Z" />
                <path d="M293.582 118.792C286.414 118.792 279.801 117.64 273.742 115.336C267.683 113.032 262.393 109.789 257.87 105.608C253.433 101.341 249.977 96.392 247.502 90.76C245.027 85.128 243.79 78.9413 243.79 72.2C243.79 65.4587 245.027 59.272 247.502 53.64C249.977 48.008 253.433 43.1013 257.87 38.92C262.393 34.6533 267.683 31.368 273.742 29.064C279.801 26.76 286.414 25.608 293.582 25.608C300.835 25.608 307.449 26.76 313.422 29.064C319.481 31.368 324.729 34.6533 329.166 38.92C333.603 43.1013 337.059 48.008 339.534 53.64C342.094 59.272 343.374 65.4587 343.374 72.2C343.374 78.9413 342.094 85.1707 339.534 90.888C337.059 96.52 333.603 101.427 329.166 105.608C324.729 109.789 319.481 113.032 313.422 115.336C307.449 117.64 300.835 118.792 293.582 118.792ZM293.582 97.8C296.995 97.8 300.153 97.2027 303.054 96.008C306.041 94.8133 308.601 93.1067 310.734 90.888C312.953 88.584 314.659 85.8533 315.854 82.696C317.134 79.5387 317.774 76.04 317.774 72.2C317.774 68.2747 317.134 64.776 315.854 61.704C314.659 58.5467 312.953 55.8587 310.734 53.64C308.601 51.336 306.041 49.5867 303.054 48.392C300.153 47.1973 296.995 46.6 293.582 46.6C290.169 46.6 286.969 47.1973 283.982 48.392C281.081 49.5867 278.521 51.336 276.302 53.64C274.169 55.8587 272.462 58.5467 271.182 61.704C269.987 64.776 269.39 68.2747 269.39 72.2C269.39 76.04 269.987 79.5387 271.182 82.696C272.462 85.8533 274.169 88.584 276.302 90.888C278.521 93.1067 281.081 94.8133 283.982 96.008C286.969 97.2027 290.169 97.8 293.582 97.8Z" />
                <path d="M426.173 118.792C419.09 118.792 412.52 117.683 406.461 115.464C400.488 113.16 395.282 109.917 390.845 105.736C386.493 101.555 383.08 96.648 380.605 91.016C378.13 85.2987 376.893 79.0267 376.893 72.2C376.893 65.3733 378.13 59.144 380.605 53.512C383.08 47.7947 386.493 42.8453 390.845 38.664C395.282 34.4827 400.488 31.2827 406.461 29.064C412.52 26.76 419.09 25.608 426.173 25.608C434.45 25.608 441.832 27.0587 448.317 29.96C454.888 32.8613 460.349 37.0427 464.701 42.504L448.573 57.096C445.672 53.6827 442.472 51.08 438.973 49.288C435.56 47.496 431.72 46.6 427.453 46.6C423.784 46.6 420.413 47.1973 417.341 48.392C414.269 49.5867 411.624 51.336 409.405 53.64C407.272 55.8587 405.565 58.5467 404.285 61.704C403.09 64.8613 402.493 68.36 402.493 72.2C402.493 76.04 403.09 79.5387 404.285 82.696C405.565 85.8533 407.272 88.584 409.405 90.888C411.624 93.1067 414.269 94.8133 417.341 96.008C420.413 97.2027 423.784 97.8 427.453 97.8C431.72 97.8 435.56 96.904 438.973 95.112C442.472 93.32 445.672 90.7173 448.573 87.304L464.701 101.896C460.349 107.272 454.888 111.453 448.317 114.44C441.832 117.341 434.45 118.792 426.173 118.792Z" />
                <path d="M520.84 117V47.496H493.32V27.4H573.192V47.496H545.8V117H520.84Z" />
                <path d="M653.257 118.792C646.089 118.792 639.476 117.64 633.417 115.336C627.358 113.032 622.068 109.789 617.545 105.608C613.108 101.341 609.652 96.392 607.177 90.76C604.702 85.128 603.465 78.9413 603.465 72.2C603.465 65.4587 604.702 59.272 607.177 53.64C609.652 48.008 613.108 43.1013 617.545 38.92C622.068 34.6533 627.358 31.368 633.417 29.064C639.476 26.76 646.089 25.608 653.257 25.608C660.51 25.608 667.124 26.76 673.097 29.064C679.156 31.368 684.404 34.6533 688.841 38.92C693.278 43.1013 696.734 48.008 699.209 53.64C701.769 59.272 703.049 65.4587 703.049 72.2C703.049 78.9413 701.769 85.1707 699.209 90.888C696.734 96.52 693.278 101.427 688.841 105.608C684.404 109.789 679.156 113.032 673.097 115.336C667.124 117.64 660.51 118.792 653.257 118.792ZM653.257 97.8C656.67 97.8 659.828 97.2027 662.729 96.008C665.716 94.8133 668.276 93.1067 670.409 90.888C672.628 88.584 674.334 85.8533 675.529 82.696C676.809 79.5387 677.449 76.04 677.449 72.2C677.449 68.2747 676.809 64.776 675.529 61.704C674.334 58.5467 672.628 55.8587 670.409 53.64C668.276 51.336 665.716 49.5867 662.729 48.392C659.828 47.1973 656.67 46.6 653.257 46.6C649.844 46.6 646.644 47.1973 643.657 48.392C640.756 49.5867 638.196 51.336 635.977 53.64C633.844 55.8587 632.137 58.5467 630.857 61.704C629.662 64.776 629.065 68.2747 629.065 72.2C629.065 76.04 629.662 79.5387 630.857 82.696C632.137 85.8533 633.844 88.584 635.977 90.888C638.196 93.1067 640.756 94.8133 643.657 96.008C646.644 97.2027 649.844 97.8 653.257 97.8Z" />
              </mask>
              <path
                className={s.pathFill}
                d="M1.59998 117V27.4H85.696V117H60.608V47.496H26.56V117H1.59998Z"
              />
              <path
                className={s.pathFill}
                d="M130.45 117V27.4H171.41C179.602 27.4 186.642 28.7227 192.53 31.368C198.503 34.0133 203.111 37.8533 206.354 42.888C209.597 47.8373 211.218 53.7253 211.218 60.552C211.218 67.2933 209.597 73.1387 206.354 78.088C203.111 83.0373 198.503 86.8773 192.53 89.608C186.642 92.2533 179.602 93.576 171.41 93.576H155.794V82.568V117H130.45ZM155.794 85.256V73.608H169.874C175.165 73.608 179.09 72.456 181.65 70.152C184.295 67.848 185.618 64.648 185.618 60.552C185.618 56.3707 184.295 53.128 181.65 50.824C179.09 48.52 175.165 47.368 169.874 47.368H155.794V85.256Z"
              />
              <path
                className={s.pathFill}
                d="M293.582 118.792C286.414 118.792 279.801 117.64 273.742 115.336C267.683 113.032 262.393 109.789 257.87 105.608C253.433 101.341 249.977 96.392 247.502 90.76C245.027 85.128 243.79 78.9413 243.79 72.2C243.79 65.4587 245.027 59.272 247.502 53.64C249.977 48.008 253.433 43.1013 257.87 38.92C262.393 34.6533 267.683 31.368 273.742 29.064C279.801 26.76 286.414 25.608 293.582 25.608C300.835 25.608 307.449 26.76 313.422 29.064C319.481 31.368 324.729 34.6533 329.166 38.92C333.603 43.1013 337.059 48.008 339.534 53.64C342.094 59.272 343.374 65.4587 343.374 72.2C343.374 78.9413 342.094 85.1707 339.534 90.888C337.059 96.52 333.603 101.427 329.166 105.608C324.729 109.789 319.481 113.032 313.422 115.336C307.449 117.64 300.835 118.792 293.582 118.792ZM293.582 97.8C296.995 97.8 300.153 97.2027 303.054 96.008C306.041 94.8133 308.601 93.1067 310.734 90.888C312.953 88.584 314.659 85.8533 315.854 82.696C317.134 79.5387 317.774 76.04 317.774 72.2C317.774 68.2747 317.134 64.776 315.854 61.704C314.659 58.5467 312.953 55.8587 310.734 53.64C308.601 51.336 306.041 49.5867 303.054 48.392C300.153 47.1973 296.995 46.6 293.582 46.6C290.169 46.6 286.969 47.1973 283.982 48.392C281.081 49.5867 278.521 51.336 276.302 53.64C274.169 55.8587 272.462 58.5467 271.182 61.704C269.987 64.776 269.39 68.2747 269.39 72.2C269.39 76.04 269.987 79.5387 271.182 82.696C272.462 85.8533 274.169 88.584 276.302 90.888C278.521 93.1067 281.081 94.8133 283.982 96.008C286.969 97.2027 290.169 97.8 293.582 97.8Z"
              />
              <path
                className={s.pathFill}
                d="M426.173 118.792C419.09 118.792 412.52 117.683 406.461 115.464C400.488 113.16 395.282 109.917 390.845 105.736C386.493 101.555 383.08 96.648 380.605 91.016C378.13 85.2987 376.893 79.0267 376.893 72.2C376.893 65.3733 378.13 59.144 380.605 53.512C383.08 47.7947 386.493 42.8453 390.845 38.664C395.282 34.4827 400.488 31.2827 406.461 29.064C412.52 26.76 419.09 25.608 426.173 25.608C434.45 25.608 441.832 27.0587 448.317 29.96C454.888 32.8613 460.349 37.0427 464.701 42.504L448.573 57.096C445.672 53.6827 442.472 51.08 438.973 49.288C435.56 47.496 431.72 46.6 427.453 46.6C423.784 46.6 420.413 47.1973 417.341 48.392C414.269 49.5867 411.624 51.336 409.405 53.64C407.272 55.8587 405.565 58.5467 404.285 61.704C403.09 64.8613 402.493 68.36 402.493 72.2C402.493 76.04 403.09 79.5387 404.285 82.696C405.565 85.8533 407.272 88.584 409.405 90.888C411.624 93.1067 414.269 94.8133 417.341 96.008C420.413 97.2027 423.784 97.8 427.453 97.8C431.72 97.8 435.56 96.904 438.973 95.112C442.472 93.32 445.672 90.7173 448.573 87.304L464.701 101.896C460.349 107.272 454.888 111.453 448.317 114.44C441.832 117.341 434.45 118.792 426.173 118.792Z"
              />
              <path
                className={s.pathFill}
                d="M520.84 117V47.496H493.32V27.4H573.192V47.496H545.8V117H520.84Z"
              />
              <path
                className={s.pathFill}
                d="M653.257 118.792C646.089 118.792 639.476 117.64 633.417 115.336C627.358 113.032 622.068 109.789 617.545 105.608C613.108 101.341 609.652 96.392 607.177 90.76C604.702 85.128 603.465 78.9413 603.465 72.2C603.465 65.4587 604.702 59.272 607.177 53.64C609.652 48.008 613.108 43.1013 617.545 38.92C622.068 34.6533 627.358 31.368 633.417 29.064C639.476 26.76 646.089 25.608 653.257 25.608C660.51 25.608 667.124 26.76 673.097 29.064C679.156 31.368 684.404 34.6533 688.841 38.92C693.278 43.1013 696.734 48.008 699.209 53.64C701.769 59.272 703.049 65.4587 703.049 72.2C703.049 78.9413 701.769 85.1707 699.209 90.888C696.734 96.52 693.278 101.427 688.841 105.608C684.404 109.789 679.156 113.032 673.097 115.336C667.124 117.64 660.51 118.792 653.257 118.792ZM653.257 97.8C656.67 97.8 659.828 97.2027 662.729 96.008C665.716 94.8133 668.276 93.1067 670.409 90.888C672.628 88.584 674.334 85.8533 675.529 82.696C676.809 79.5387 677.449 76.04 677.449 72.2C677.449 68.2747 676.809 64.776 675.529 61.704C674.334 58.5467 672.628 55.8587 670.409 53.64C668.276 51.336 665.716 49.5867 662.729 48.392C659.828 47.1973 656.67 46.6 653.257 46.6C649.844 46.6 646.644 47.1973 643.657 48.392C640.756 49.5867 638.196 51.336 635.977 53.64C633.844 55.8587 632.137 58.5467 630.857 61.704C629.662 64.776 629.065 68.2747 629.065 72.2C629.065 76.04 629.662 79.5387 630.857 82.696C632.137 85.8533 633.844 88.584 635.977 90.888C638.196 93.1067 640.756 94.8133 643.657 96.008C646.644 97.2027 649.844 97.8 653.257 97.8Z"
              />
              <path
                className={s.pathStroke}
                d="M1.59998 117V27.4H85.696V117H60.608V47.496H26.56V117H1.59998Z"
                strokeWidth="2"
                mask="url(#path-1-outside-1_1006_2298)"
              />
              <path
                className={s.pathStroke}
                d="M130.45 117V27.4H171.41C179.602 27.4 186.642 28.7227 192.53 31.368C198.503 34.0133 203.111 37.8533 206.354 42.888C209.597 47.8373 211.218 53.7253 211.218 60.552C211.218 67.2933 209.597 73.1387 206.354 78.088C203.111 83.0373 198.503 86.8773 192.53 89.608C186.642 92.2533 179.602 93.576 171.41 93.576H155.794V82.568V117H130.45ZM155.794 85.256V73.608H169.874C175.165 73.608 179.09 72.456 181.65 70.152C184.295 67.848 185.618 64.648 185.618 60.552C185.618 56.3707 184.295 53.128 181.65 50.824C179.09 48.52 175.165 47.368 169.874 47.368H155.794V85.256Z"
                strokeWidth="2"
                mask="url(#path-1-outside-1_1006_2298)"
              />
              <path
                className={s.pathStroke}
                d="M293.582 118.792C286.414 118.792 279.801 117.64 273.742 115.336C267.683 113.032 262.393 109.789 257.87 105.608C253.433 101.341 249.977 96.392 247.502 90.76C245.027 85.128 243.79 78.9413 243.79 72.2C243.79 65.4587 245.027 59.272 247.502 53.64C249.977 48.008 253.433 43.1013 257.87 38.92C262.393 34.6533 267.683 31.368 273.742 29.064C279.801 26.76 286.414 25.608 293.582 25.608C300.835 25.608 307.449 26.76 313.422 29.064C319.481 31.368 324.729 34.6533 329.166 38.92C333.603 43.1013 337.059 48.008 339.534 53.64C342.094 59.272 343.374 65.4587 343.374 72.2C343.374 78.9413 342.094 85.1707 339.534 90.888C337.059 96.52 333.603 101.427 329.166 105.608C324.729 109.789 319.481 113.032 313.422 115.336C307.449 117.64 300.835 118.792 293.582 118.792ZM293.582 97.8C296.995 97.8 300.153 97.2027 303.054 96.008C306.041 94.8133 308.601 93.1067 310.734 90.888C312.953 88.584 314.659 85.8533 315.854 82.696C317.134 79.5387 317.774 76.04 317.774 72.2C317.774 68.2747 317.134 64.776 315.854 61.704C314.659 58.5467 312.953 55.8587 310.734 53.64C308.601 51.336 306.041 49.5867 303.054 48.392C300.153 47.1973 296.995 46.6 293.582 46.6C290.169 46.6 286.969 47.1973 283.982 48.392C281.081 49.5867 278.521 51.336 276.302 53.64C274.169 55.8587 272.462 58.5467 271.182 61.704C269.987 64.776 269.39 68.2747 269.39 72.2C269.39 76.04 269.987 79.5387 271.182 82.696C272.462 85.8533 274.169 88.584 276.302 90.888C278.521 93.1067 281.081 94.8133 283.982 96.008C286.969 97.2027 290.169 97.8 293.582 97.8Z"
                strokeWidth="2"
                mask="url(#path-1-outside-1_1006_2298)"
              />
              <path
                className={s.pathStroke}
                d="M426.173 118.792C419.09 118.792 412.52 117.683 406.461 115.464C400.488 113.16 395.282 109.917 390.845 105.736C386.493 101.555 383.08 96.648 380.605 91.016C378.13 85.2987 376.893 79.0267 376.893 72.2C376.893 65.3733 378.13 59.144 380.605 53.512C383.08 47.7947 386.493 42.8453 390.845 38.664C395.282 34.4827 400.488 31.2827 406.461 29.064C412.52 26.76 419.09 25.608 426.173 25.608C434.45 25.608 441.832 27.0587 448.317 29.96C454.888 32.8613 460.349 37.0427 464.701 42.504L448.573 57.096C445.672 53.6827 442.472 51.08 438.973 49.288C435.56 47.496 431.72 46.6 427.453 46.6C423.784 46.6 420.413 47.1973 417.341 48.392C414.269 49.5867 411.624 51.336 409.405 53.64C407.272 55.8587 405.565 58.5467 404.285 61.704C403.09 64.8613 402.493 68.36 402.493 72.2C402.493 76.04 403.09 79.5387 404.285 82.696C405.565 85.8533 407.272 88.584 409.405 90.888C411.624 93.1067 414.269 94.8133 417.341 96.008C420.413 97.2027 423.784 97.8 427.453 97.8C431.72 97.8 435.56 96.904 438.973 95.112C442.472 93.32 445.672 90.7173 448.573 87.304L464.701 101.896C460.349 107.272 454.888 111.453 448.317 114.44C441.832 117.341 434.45 118.792 426.173 118.792Z"
                strokeWidth="2"
                mask="url(#path-1-outside-1_1006_2298)"
              />
              <path
                className={s.pathStroke}
                d="M520.84 117V47.496H493.32V27.4H573.192V47.496H545.8V117H520.84Z"
                strokeWidth="2"
                mask="url(#path-1-outside-1_1006_2298)"
              />
              <path
                className={s.pathStroke}
                d="M653.257 118.792C646.089 118.792 639.476 117.64 633.417 115.336C627.358 113.032 622.068 109.789 617.545 105.608C613.108 101.341 609.652 96.392 607.177 90.76C604.702 85.128 603.465 78.9413 603.465 72.2C603.465 65.4587 604.702 59.272 607.177 53.64C609.652 48.008 613.108 43.1013 617.545 38.92C622.068 34.6533 627.358 31.368 633.417 29.064C639.476 26.76 646.089 25.608 653.257 25.608C660.51 25.608 667.124 26.76 673.097 29.064C679.156 31.368 684.404 34.6533 688.841 38.92C693.278 43.1013 696.734 48.008 699.209 53.64C701.769 59.272 703.049 65.4587 703.049 72.2C703.049 78.9413 701.769 85.1707 699.209 90.888C696.734 96.52 693.278 101.427 688.841 105.608C684.404 109.789 679.156 113.032 673.097 115.336C667.124 117.64 660.51 118.792 653.257 118.792ZM653.257 97.8C656.67 97.8 659.828 97.2027 662.729 96.008C665.716 94.8133 668.276 93.1067 670.409 90.888C672.628 88.584 674.334 85.8533 675.529 82.696C676.809 79.5387 677.449 76.04 677.449 72.2C677.449 68.2747 676.809 64.776 675.529 61.704C674.334 58.5467 672.628 55.8587 670.409 53.64C668.276 51.336 665.716 49.5867 662.729 48.392C659.828 47.1973 656.67 46.6 653.257 46.6C649.844 46.6 646.644 47.1973 643.657 48.392C640.756 49.5867 638.196 51.336 635.977 53.64C633.844 55.8587 632.137 58.5467 630.857 61.704C629.662 64.776 629.065 68.2747 629.065 72.2C629.065 76.04 629.662 79.5387 630.857 82.696C632.137 85.8533 633.844 88.584 635.977 90.888C638.196 93.1067 640.756 94.8133 643.657 96.008C646.644 97.2027 649.844 97.8 653.257 97.8Z"
                strokeWidth="2"
                mask="url(#path-1-outside-1_1006_2298)"
              />
              <motion.rect
                x="60"
                y="117.5"
                width="96"
                height="0.1"
                variants={lineAnimation2}
                custom={3.5}
                className={s.pathStroke}
              />
              <motion.rect
                x="1"
                y="15.5"
                width="85"
                height="0.1"
                className={s.pathStroke}
                variants={lineAnimation1}
                custom={3.5}
              />
              <motion.rect
                x="720.5"
                y="140"
                className={s.pathStroke}
                height="133"
                width="0.1"
                variants={bigSquare3}
                custom={7.5}
              />
              <motion.rect
                x="716.5"
                y="1.5"
                width="7"
                height="7"
                className={s.pathSquare}
                variants={smallSquare}
                custom={9.5}
              />
              <motion.rect
                x="586"
                y="139.5"
                className={s.pathStroke}
                height="0.1"
                width="133"
                variants={bigSquare2}
                custom={5.5}
              />
              <motion.rect
                x="716.5"
                y="136.5"
                width="7"
                height="7"
                className={s.pathSquare}
                variants={smallSquare}
                custom={7.5}
              />
              <motion.rect
                x="586.5"
                y="5"
                className={s.pathStroke}
                width="0.1"
                height="133"
                variants={bigSquare1}
                custom={3.5}
              />
              <motion.rect
                x="582.5"
                y="136.5"
                width="7"
                height="7"
                className={s.pathSquare}
                variants={smallSquare}
                custom={5.5}
              />
              <motion.rect
                x="716.5"
                y="5"
                className={s.pathStroke}
                height="0.1"
                width="133"
                variants={bigSquare4}
                custom={9.5}
              />
              <motion.rect
                x="582.5"
                y="1.5"
                width="7"
                height="7"
                className={s.pathSquare}
                variants={smallSquare}
                custom={11.5}
              />
              <motion.rect
                x="210"
                y="72.5"
                width="212"
                height="0.1"
                className={s.pathStroke}
                variants={lineAnimation3}
                custom={3.5}
              />
              <motion.rect
                x="422.5"
                y="69.5"
                width="7"
                height="7"
                className={s.pathSquare}
                variants={smallSquare}
                custom={5.5}
              />
            </svg>
          </motion.div>

          <motion.h1 className={s.title} variants={textAnimation} custom={2.4}>
            Спектр. Управленческий консалтинг.
          </motion.h1>
          <motion.hr
            className={s.lineOne}
            variants={opacityAnimation}
            custom={3}
          />
        </div>

        <motion.button
          className={cn(s.contact, "button__animation")}
          variants={textAnimation}
          custom={2.6}
        >
          <Link
            to="contact"
            smooth={true}
            offset={-150}
            duration={500}
            className={s.linkButton}
          >
            Связаться
          </Link>
        </motion.button>

        <motion.hr
          className={s.lineTwo}
          variants={opacityAnimation}
          custom={3}
        />
        <motion.hr
          className={s.lineThree}
          variants={opacityAnimation}
          custom={3}
        />
      </div>

      <motion.div className={s.triangleAbsolute} ref={ref} style={{ y }}>
        <div className={s.triangleWrapper}>
          <div className={cn(s.triangle, s.triangleOne)}>
            <motion.svg
              variants={triangleOneAnimation}
              custom={2}
              width="285"
              height="356"
              viewBox="0 0 285 356"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M0.99892 354.56L142.498 1.74739L283.996 354.56L0.99892 354.56Z"
                className={s.pathStroke}
              />
            </motion.svg>
          </div>
          <div className={cn(s.triangle, s.triangleTwo)}>
            <motion.svg
              variants={triangleTwoAnimation}
              custom={2}
              width="285"
              height="356"
              viewBox="0 0 285 356"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M142.498 0.404175L284.736 355.06L0.259674 355.06L142.498 0.404175Z"
                fill="url(#paint0_linear_1030_2168)"
                className={s.pathStrokePainted}
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1030_2168"
                  x1="142.498"
                  y1="0.404185"
                  x2="142.498"
                  y2="320.032"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D3ADAD" />
                  <stop offset="1" stop-color="#FFEDAD" stop-opacity="0.22" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>
          <div className={cn(s.triangle, s.triangleThree)}>
            <motion.svg
              variants={triangleThreeAnimation}
              custom={2}
              width="285"
              height="356"
              viewBox="0 0 285 356"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M142.498 0.404175L284.736 355.06L0.259674 355.06L142.498 0.404175Z"
                fill="url(#paint0_linear_1030_2169)"
                className={s.pathStrokePainted}
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1030_2169"
                  x1="142.498"
                  y1="0.404185"
                  x2="142.498"
                  y2="320.032"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B7ADD3" />
                  <stop offset="1" stop-color="#FFADAD" stop-opacity="0.22" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>
          <div className={cn(s.triangle, s.triangleFour)}>
            <motion.svg
              variants={triangleFourAnimation}
              custom={2}
              width="285"
              height="355"
              viewBox="0 0 285 355"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M142.242 0L284.48 354.656L0.00430298 354.656L142.242 0Z"
                fill="url(#paint0_linear_1030_2170)"
                className={s.pathStrokePainted}
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1030_2170"
                  x1="142.242"
                  y1="9.37632e-06"
                  x2="125.241"
                  y2="386.835"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D3CFAD" />
                  <stop offset="1" stop-color="#ADFFC4" stop-opacity="0" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>
        </div>
      </motion.div>

      <motion.div className={s.triangleAbsolute2} ref={ref} style={{ y }}>
        <div className={s.triangleWrapper2}>
          <div className={cn(s.triangle2, s.triangleOne2)}>
            <motion.svg
              variants={triangleOneAnimation2}
              custom={2}
              width="285"
              height="356"
              viewBox="0 0 285 356"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M0.99892 354.56L142.498 1.74739L283.996 354.56L0.99892 354.56Z"
                className={s.pathStroke}
              />
            </motion.svg>
          </div>
          <div className={cn(s.triangle2, s.triangleTwo2)}>
            <motion.svg
              variants={triangleTwoAnimation2}
              custom={2}
              width="285"
              height="356"
              viewBox="0 0 285 356"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M142.498 0.404175L284.736 355.06L0.259674 355.06L142.498 0.404175Z"
                fill="url(#paint0_linear_1030_2168)"
                className={s.pathStrokePainted}
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1030_2168"
                  x1="142.498"
                  y1="0.404185"
                  x2="142.498"
                  y2="320.032"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D3ADAD" />
                  <stop offset="1" stop-color="#FFEDAD" stop-opacity="0.22" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>
          <div className={cn(s.triangle2, s.triangleThree2)}>
            <motion.svg
              variants={triangleThreeAnimation2}
              custom={2}
              width="285"
              height="356"
              viewBox="0 0 285 356"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M142.498 0.404175L284.736 355.06L0.259674 355.06L142.498 0.404175Z"
                fill="url(#paint0_linear_1030_2169)"
                className={s.pathStrokePainted}
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1030_2169"
                  x1="142.498"
                  y1="0.404185"
                  x2="142.498"
                  y2="320.032"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B7ADD3" />
                  <stop offset="1" stop-color="#FFADAD" stop-opacity="0.22" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>
          <div className={cn(s.triangle2, s.triangleFour2)}>
            <motion.svg
              variants={triangleFourAnimation2}
              custom={2}
              width="285"
              height="355"
              viewBox="0 0 285 355"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M142.242 0L284.48 354.656L0.00430298 354.656L142.242 0Z"
                fill="url(#paint0_linear_1030_2170)"
                className={s.pathStrokePainted}
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1030_2170"
                  x1="142.242"
                  y1="9.37632e-06"
                  x2="125.241"
                  y2="386.835"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D3CFAD" />
                  <stop offset="1" stop-color="#ADFFC4" stop-opacity="0" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export { HomeSection };
