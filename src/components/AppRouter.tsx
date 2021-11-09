import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {privateRoutes, publicRoutes, RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

export const AppRouter = () => {
	const { isAuth } = useTypedSelector(state => state.auth);
	console.log(isAuth)

	return (
		<Switch>
			{isAuth ?
				<>
					{privateRoutes.map(route =>
						<Route
							path={route.path}
							exact={route.exact}
							component={route.component}
							key={route.path}
						/>
					)}
					<Redirect to={RouteNames.EVENT}/>
				</>
			:
				<>
					{publicRoutes.map(route =>
						<Route
							path={route.path}
							exact={route.exact}
							component={route.component}
							key={route.path}
						/>
					)}
					<Redirect to={RouteNames.LOGIN}/>
				</>}
		</Switch>
	)
};
