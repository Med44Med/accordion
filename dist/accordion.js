import { createContext, useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const AccordionContext = /*#__PURE__*/createContext();
const Accordion = ({
  className,
  children,
  defaultIndex
}) => {
  const [openIndex, setOpenIndex] = useState(defaultIndex | null);
  const toggleItem = index => {
    setOpenIndex(prev => prev === index ? null : index);
  };
  return /*#__PURE__*/_jsx(AccordionContext.Provider, {
    value: {
      openIndex,
      toggleItem
    },
    children: /*#__PURE__*/_jsx("div", {
      className: `${className}`,
      children: children
    })
  });
};
Accordion.Item = function Item({
  children,
  title,
  index,
  className
}) {
  const {
    openIndex,
    toggleItem
  } = useContext(AccordionContext);
  const selected = openIndex === index;
  return /*#__PURE__*/_jsxs("div", {
    className: "flex flex-col ",
    children: [/*#__PURE__*/_jsxs("div", {
      onClick: () => toggleItem(index),
      className: "bg-primary px-2 py-2 w-full flex justify-between items-center",
      children: [/*#__PURE__*/_jsx("h1", {
        className: "text-light",
        children: title
      }), /*#__PURE__*/_jsx(FaChevronDown, {
        className: `text-light ${selected && "rotate-180"} `
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: `overflow-hidden ${selected ? "max-h-96" : "max-h-0"}`,
      style: {
        transition: 'all .5s ease-out'
      },
      children: /*#__PURE__*/_jsx("div", {
        className: ` ${className} w-full h-fit px-2 py-2`,
        children: children
      })
    })]
  });
};
export default Accordion;