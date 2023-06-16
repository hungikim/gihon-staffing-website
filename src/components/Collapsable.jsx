import { useRef, useState } from "react"
import { PageSubSubHeading } from "./Pages.styled"
import styled from "styled-components"

export default function LiCollapsable(props) {
    const [open, setOpen] = useState(false)
    const contentRef = useRef()
    return (
        <LI>
            <CollapsableSubSubHeading onClick={()=>setOpen(open? false: true)}>
                { props.heading }
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                {open? 
                    <path fill="currentColor" d="m283-331.999-56.566-56.566L480-642.131l253.566 252.566L677-332.999l-197-197-197 198Z"/>
                    : 
                    <path fill="currentColor" d="M480-331.999 226.434-585.565 283-642.131l197 198 197-197 56.566 56.566L480-331.999Z"/>
                }
                </svg>
            
            </CollapsableSubSubHeading>
            <CollapsableContent ref={contentRef} style={open? { height: contentRef.current.scrollHeight+'px', margin: '10px 0' } : { height: '0px' }}>
                {props.children}
            </CollapsableContent>
        </LI>
    )
}

const LI = styled.li`
    margin: 5px 0;
    list-style-type: none;
`

const CollapsableSubSubHeading = styled(PageSubSubHeading)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0;
    background: var(--stronger-color);
    width: 100%;
    padding: 2px 20px;
    color: var(--bg-color);
`

const CollapsableContent = styled.div`
    overflow: hidden;
    transition: 0.2s ease;
    padding: 0 10px;
`
