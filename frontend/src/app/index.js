export * from './constants';

import { UserLayout } from './user/user.layout';
import { AuthLayout } from './auth/auth.layout';
import { ManagerLayout } from './manager/manager.layout';
import { MasterLayout } from './master/master.layout';

const Layouts = {};

Layouts.UserLayout = UserLayout;
Layouts.AuthLayout = AuthLayout;
Layouts.MasterLayout = MasterLayout;
Layouts.ManagerLayout = ManagerLayout;

export {
    Layouts
}