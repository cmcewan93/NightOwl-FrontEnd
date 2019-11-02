<Router>
      <Switch>
        <Route exact path="/">
          {state.userAuth ? (
            <Redirect to="/map" />
          ) : (
            <Login setAuth={setAuth} />
          )}
        </Route>
        <Route exact path="/map">
          {!state.userAuth ? (
            <Redirect to="/" />
          ) : (
            <MapView setAuth={setAuth} />
          )}
        </Route>
        <Route exact path="/bar">
          <BarviewList />
        </Route>
      </Switch>
    </Router>