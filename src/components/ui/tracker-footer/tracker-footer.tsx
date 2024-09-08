import { useTranslation } from 'react-i18next';
import underDeliveryIcon from '../../../assets/under-delivery.svg';
import userIcon from '../../../assets/user.svg';
import phoneIcon from '../../../assets/phone.svg';
import locationIcon from '../../../assets/location.svg';
import mailIcon from '../../../assets/mail.svg';

export function TrackerFooter() {
    const { t } = useTranslation();

    return (
        <footer className="tracker-footer">
            <h3>
                <img src={underDeliveryIcon} alt={ t('footerTitle') }/>
                { t('footerTitle') }
            </h3>
            <div className="contact-line">
                <div className="line">
                    <img src={userIcon} alt=""/>
                    Test User
                </div>
                <div className="line">
                    <img src={phoneIcon} alt=""/>
                    +36 00 000 0000
                </div>
                <div className="line">
                    <img src={locationIcon} alt=""/>
                    Street
                </div>
                <div className="line">
                    <img src={mailIcon} alt=""/>
                    mail@mail.com
                </div>
            </div>
        </footer>
    );
}