import React, {FC} from 'react';
import {Layout, Menu} from 'antd';
import {useHistory} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const {Header} = Layout;

const Navbar: FC = () => {
	const router = useHistory();
	const {isAuth} = useTypedSelector(state => state.auth);
	console.log(isAuth)

	return (
		<Header className="header">
				<Menu theme="dark" mode="horizontal" selectable={true}>
					{isAuth ?
						<Menu.Item
							onClick={() => router.push(RouteNames.LOGIN)}
							key="1">Login</Menu.Item>
						:
						<Menu.Item
							onClick={() => router.push(RouteNames.EVENT)}
							key="1">Event</Menu.Item>
					}

				</Menu>
		</Header>
	);
};

export default Navbar;
