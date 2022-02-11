import classes from './Layout.module.css'
import MainNavigation from './MainNavigation'

function Layout(props) {
    return ( 
        <div>
            <MainNavigation />
            <main className={classes.main}>
             {props.children}
            </main>
        </div>
   // <main className="classes.main"></main>


    );
}

export default Layout;