import classNames from 'classnames/bind';

import styles from './Layout.module.scss';
import Header from './Header';

const cx = classNames.bind(styles);

function Layout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
        </div>
    );
}
export default Layout;
