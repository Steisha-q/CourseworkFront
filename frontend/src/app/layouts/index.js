import { UserLayout } from './user.layout';
import { AuthLayout } from './auth.layout';
import { ManagerLayout } from './manager.layout';
import { MasterLayout } from './master.layout';

const Layouts = {};

Layouts.UserLayout = UserLayout;
Layouts.AuthLayout = AuthLayout;
Layouts.MasterLayout = MasterLayout;
Layouts.ManagerLayout = ManagerLayout;

export {
    Layouts
}