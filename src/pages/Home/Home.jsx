import './home.scss';
import iconChat from '../../assets/icon-chat.png'
import iconMoney from '../../assets/icon-money.png'
import iconSecurity from '../../assets/icon-security.png'
import TextContentBanner from '../../components/TextContentBanner/TextContentBanner';
import ItemContentHome from '../../components/ItemContentHome/ItemContentHome';

function Home() {
    return (
        <div>
            <main>
                <TextContentBanner />
                <section className="features">
                    <ItemContentHome
                        icon={iconChat}
                        title='You are our #1 priority'
                        description='Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes.'
                    />
                    <ItemContentHome
                        icon={iconMoney}
                        title='More savings means higher rates'
                        description='The more you save with us, the higher your interest rate will be!'
                    />
                    <ItemContentHome
                        icon={iconSecurity}
                        title='Security you can trust'
                        description='We use top of the line encryption to make sure your data and money
                        is always safe.'
                    />
                </section>
            </main>
        </div>
    );
}

export default Home;
