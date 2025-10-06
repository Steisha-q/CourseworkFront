// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import { DashboardPage, HomePage, MainPage, ProfilePage, SignInPage, SignUpPage } from "./pages";
import { Layouts, ROUTES } from "./app";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home()} element={<HomePage />} />

        <Route element={<Layouts.UserLayout />}>
          <Route path={ROUTES.profile()} element={<ProfilePage />} />
        </Route>

        <Route element={<Layouts.AuthLayout />}>
          <Route path={ROUTES.signIn()} element={<SignInPage />} />
          <Route path={ROUTES.signUp()} element={<SignUpPage />} />
        </Route>

        <Route element={<Layouts.ManagerLayout />}>
          <Route path={ROUTES.dashboard()} element={<DashboardPage />} />
        </Route>

        <Route element={<Layouts.MasterLayout />}>
          <Route path={ROUTES.main()} element={<MainPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
