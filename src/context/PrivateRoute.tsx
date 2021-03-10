import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { UserContext } from './UserContext';
import { SignIn } from '../admin/SignIn';
interface IPrivateRouteProps extends RouteComponentProps {
    comp: React.ComponentClass | React.FunctionComponent
}
export class PrivateRoute extends React.Component<IPrivateRouteProps> {
    // static contextType = UserContext;
    static contextType = UserContext;
    // constructor(props: IPrivateRouteProps){
    //   super(props);
    // }
    render() {
      let {comp : Comp, ...props } = this.props;
    //   const targetPath = this.props.path? (this.props.path + this.props.location?.search) : undefined
      return (this.context.isLoggedIn() ? 
      <Comp {...props} /> :
      <SignIn />
      )
    }
  }