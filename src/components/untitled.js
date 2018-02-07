<Grid container>
              <Grid justify='center' direction='row'>
                    <Grid md={5} container className={classes.materialImg} item>
                        <img src={LoginImage} alt="login-page"/>
                    </Grid>
                    <Grid direction='ro' md={7} container className={classes.login} item>
                    <Grid >
                            <Grid>
                                <img src={Logo} className={classes.logo} alt='mechatronics robot laboratory onaft'/>
                            </Grid>
                          <Grid>
                            <FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
                          </Grid>
                    </Grid>
                    </Grid>
              </Grid>
            </Grid>




            <Grid md={12}>
              <Grid direction='row' alignItems='center' justify='center'>
                <Grid md={4}>
                  <p>img</p>
                </Grid>
                <Grid md={8} direction='column'>
                  <Grid md={2}>
                    <p>logo</p>
                  </Grid>
                  <Grid md={10}>
                    <p>auth</p>
                  </Grid>
                </Grid> 
              </Grid>
            </Grid>