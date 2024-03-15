import Sidebar from '../ui/dashboard/sidebar/sidebar';
import Navbar from '../ui/dashboard/navbar/navbar';
import styles from '../ui/dashboard/dashboard.module.css';

const Layout = ({children}:any) => {
	return (
	<div className={styles.container}>
		<div className={styles.content}>
			<Sidebar />
		</div>
		<div className={styles.menu}>
			<Navbar />
		</div>
		<div>
			{children}
		</div>
	</div>
		)	
}

export default Layout;