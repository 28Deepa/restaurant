import React from 'react'

export const Navbar = ({fetchSearchResults}) => {
    return (
        <>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand"></a>
                <form className="form-inline">
                    <input className="form-control mr-sm-8" type="search" placeholder="Search" aria-label="Search" onClick={fetchSearchResults} />
                </form>
            </nav>
        </>
    )
}
