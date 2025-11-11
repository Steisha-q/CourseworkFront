import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { ROUTES, Layouts } from "@app";
import {
  HomePage,
  ProfilePage,
  SignInPage,
  SignUpPage,
  MasterDashboardPage,
  CategoriesPage,
  UsersPage,
  MainPage,
  FeedbackPage,
  CreateCommunityPage,
  ShoppingPage,
  MProfilePage,
  RafflesPage,
  RaffleDetailPage,
  DeliveryStatusPage,
  ThingsPage,
  GainPage,
  EditProfilePage,
  CreatePage,
} from "./pages";
import "./App.css";
import { PostsPage } from "./pages/manager/PostsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.home()} element={<HomePage />} />
          <Route path={ROUTES.feedback()} element={<FeedbackPage />} />
          <Route
            path={ROUTES.createcommunity()}
            element={<CreateCommunityPage />}
          />

          <Route element={<Layouts.UserLayout />}>
            <Route path={ROUTES.profile()} element={<ProfilePage />} />
            <Route path={ROUTES.shopping()} element={<ShoppingPage />} />
            <Route path={ROUTES.gain()} element={<GainPage />} />
            <Route path={ROUTES.editprofile()} element={<EditProfilePage />} />
          </Route>

          <Route element={<Layouts.AuthLayout />}>
            <Route path={ROUTES.signIn()} element={<SignInPage />} />
            <Route path={ROUTES.signUp()} element={<SignUpPage />} />
          </Route>

          <Route element={<Layouts.ManagerLayout />}>
            <Route
              path={ROUTES.managerDashboard()}
              element={<MasterDashboardPage />}
            />
            <Route path={ROUTES.categories()} element={<CategoriesPage />} />

            <Route path={ROUTES.users()} element={<UsersPage />} />

            <Route path={ROUTES.raffles()} element={<RafflesPage />} />

            <Route path={ROUTES.post()} element={<PostsPage />} />

            <Route path={ROUTES.status()} element={<DeliveryStatusPage />} />

            <Route path={ROUTES.things()} element={<ThingsPage />} />

            <Route path="/manager/raffles/:id" element={<RaffleDetailPage />} />
          </Route>

          <Route element={<Layouts.MasterLayout />}>
            <Route path={ROUTES.main()} element={<MainPage />} />
            <Route path={ROUTES.mprofile()} element={<MProfilePage />} />
            <Route path={ROUTES.create()} element={<CreatePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
