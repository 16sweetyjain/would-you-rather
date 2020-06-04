import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";
import { Route, Switch, Redirect, Link } from 'react-router-dom';

class NavbarComp extends Component {

    render() {
        return (
            <div>
                <React.Fragment>
                <Navbar bg="primary" variant="dark" light expand="md">
                    <NavItem>
                        <NavLink tag={Link} to='/home_ans'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/add'>Create</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/leaderboard'>Leaderboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/signIn'>Logout</NavLink>
                    </NavItem>


                </Navbar>
                </React.Fragment>
            </div>
        );
    }
}

export default NavbarComp;