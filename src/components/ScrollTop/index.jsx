/**
 * @import
 */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { IoIosArrowUp } from "react-icons/io";

/**
 * @define Styled-components
 */

const ScrollButtonWrapper = styled.div`
   position: fixed;
   width: 74px;
   height: 74px;
   background: ${themeGet("colors.primary.regular")};
   color: ${themeGet("colors.white")};
   text-transform: uppercase;
   text-align: center;
   bottom: 25px;
   right: 25px;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   opacity: ${({ showButton }) => (showButton ? 100 : 0)};
   transform: scale(${({ showButton }) => (showButton ? 1 : 0)});
   transition: all 0.4s ease-in;
   z-index: 100;
 `;

const ButtonDiv = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 100%;
   height: 100%;
   background-color: dodgerblue;
   box-shadow: 0 0 10px dodgerblue;
   border-radius: 50%;
   font-size: 16px;
   color: white;
 `;

/**
 * @define Main component
 */

const ScrollTop = () => {
    const [enable, setEnable] = useState(false);
    let timeout;
    const handleOnScroll = (isMounted) => {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            isMounted && setEnable(true);
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                isMounted && setEnable(false);
            }, 2000);
        } else {
            isMounted && setEnable(false);
        }
    };
    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    useEffect(() => {
        let isMounted = true;
        if (isMounted)
            window.addEventListener("scroll", () => handleOnScroll(isMounted));
        return () => {
            isMounted = false;
            window.removeEventListener("scroll", () => {
                return;
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <ScrollButtonWrapper onClick={scrollToTop} showButton={enable}>
                <ButtonDiv>
                    <IoIosArrowUp />
                    <span>Top</span>
                </ButtonDiv>
            </ScrollButtonWrapper>
        </>
    );
};
export default ScrollTop;
