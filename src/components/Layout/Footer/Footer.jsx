import React from 'react'
import Image from 'next/image'

// import styles
import styles from './footer.module.css'

// import images
import Logo from '../../../assets/logoblue.png'
import Facebook from '../../../assets/facebook.png'
import O from '../../../assets/o.png'
import Twitter from '../../../assets/twitter.png'

const Footer = () => {
    return (
        <React.Fragment>
            <div className={styles.border}></div>
            <div className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.image}>
                        <div className={styles.logo}>
                            <Image src={Logo} alt="Logo" layout='intrinsic' width={264} height={54} />
                        </div>
                        <div className={styles.social}>
                            <Image src={Facebook} alt="FaceBook" layout='intrinsic' width={36} height={36} />
                            <Image src={O} alt="O" layout='intrinsic' width={36} height={36} />
                            <Image src={Twitter} alt="Twitter" layout='intrinsic' width={36} height={36} />
                        </div>
                    </div>
                    <div className={styles.context}>
                        <div className={styles.account}>
                            <div className={styles.title}>My Account</div>
                            <div className={styles.content}>
                                <div className={styles.lcontent}>
                                    <div className={styles.resources}>Resources</div>
                                    <div className={styles.helpcenter}>Help Center</div>
                                    <div className={styles.partners}>Partners</div>
                                    <div className={styles.suggestions}>Suggestions</div>
                                </div>
                                <div className={styles.rcontent}>
                                    <div className={styles.resources}>Discord Community</div>
                                    <div className={styles.helpcenter}>Blog</div>
                                    <div className={styles.helpcenter}>Docs</div>
                                    <div className={styles.helpcenter}>Newsletter</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.sctotal}>
                            <div className={styles.stats}>
                                <div className={styles.title}>Stats</div>
                                <div className={styles.content}>
                                    <div className={styles.lcontent}>
                                        <div className={styles.resources}>Rankings</div>
                                        <div className={styles.helpcenter}>Activity</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.company}>
                                <div className={styles.title}>Company</div>
                                <div className={styles.content}>
                                    <div className={styles.lcontent}>
                                        <div className={styles.resources}>About</div>
                                        <div className={styles.helpcenter}>Careers</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </React.Fragment>
    )
}

export default Footer
