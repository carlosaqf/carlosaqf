import React from 'react'
import { StyledMenu } from './Menu.styled'
import Link from '../Links'
import { StaticQuery, graphql } from 'gatsby'



const Menu = ({ open, menuLinks, ...props }) => {

    const isHidden = open ? true : false
    const tabIndex = isHidden ? 0 : -1

    return (
        <StyledMenu 
            open={open}
            aria-hidden={!isHidden}
            {...props}
        >
            <StaticQuery
                query={graphql`
                    query MenuLinksQuery {
                        site {
                            siteMetadata {
                                title
                                menuLinks {
                                    name
                                    link
                                }
                            }
                        }
                    }
                `}
                render={data => (
                    <>
                        <Link
                            page={data.site.siteMetadata.menuLinks[1].link} 
                            text={data.site.siteMetadata.menuLinks[1].name} 
                        />
                        <Link
                            page={data.site.siteMetadata.menuLinks[2].link} 
                            text={data.site.siteMetadata.menuLinks[2].name} 
                        />
                        <Link
                            page={data.site.siteMetadata.menuLinks[3].link} 
                            text={data.site.siteMetadata.menuLinks[3].name} 
                        />
                        <Link
                            page={data.site.siteMetadata.menuLinks[4].link} 
                            text={data.site.siteMetadata.menuLinks[4].name} 
                        />
                    </>
                )}
            />
      
            


        </StyledMenu>
    )
}

export default Menu



// <a href="/"
            //     tabIndex={tabIndex}
            // >About</a>
            // <a href="/"
            //     tabIndex={tabIndex}
            // >Work</a>
            // <a href="/"
            //     tabIndex={tabIndex}
            // >Contact</a>
            // <Link
            //     page={menuLinks[1].link} 
            //     text={menuLinks[1].name} 
            // />