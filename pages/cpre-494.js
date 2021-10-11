import Head from 'next/head';


import InfoSection from '../components/info-section/info-section';

import {StyledInfoListContainer, StyledTitleBox} from './styles';

const EthicsEssay = () => (
  <>
    <p>{'Humans of all backgrounds rely on the products, ideas, and processes developed by engineers in almost every aspect of their lives. Because of this, great care must be taken by engineers to ensure that the things they create are safe and reliable so that consumers are not put in unnecessary danger or manipulated by corrupt business practices.'}</p>
    <p>{'One such ethical obligation that engineers have is to make sure consumers have access to accurate and useful information about what they are buying. This is an ethical issue because if information is being knowingly withheld from a customer, they are being manipulated to spend money on a product which may not be what was originally agreed upon. If I learned about a violation like this happening in my workplace there would be a few factors to go through to make a decision of how to handle it. Most importantly, its first good to consider the legal implication of the issue at hand. If the ethical violation is serious enough to be punishable by law, I would determine the best groups or people to bring the issue up to. I would also consider any systems in place in my company for bringing up ethics violations to mangers or HR representatives. If I was directly involved in the ethical dilemma, I would be as transparent as possible with information to customer and ask a lot of questions to make sure they are comfortable with the business agreement and have all accurate information they need.'}</p>
    <p>{'This kind of ethical issue is similar to the Ford Pinto issue we read about in class. The issue with the Pinto was one where the company knowingly withheld and changed safety information about a model of car which cheap design made it a lot more dangerous that originally advertised. This is similar to what I described above because it shows a misuse of information to manipulate people to buy a product when given more accurate information, they may not want to spend money on that product. What sets the Pinto issue apart is that it happened such a long time ago that vehicle safety standards and ethics issues were treated very differently than they are today which may have contributed to the decision to withhold that information. When discussing the issue as a group in class we came to a consensus of two action items which were to be more transparent with information about the safety of the vehicle or when knowing that safety was an issue the company should have redesigned the car to be safer.'}</p>
    <p>{'With respect to the virtues of ethics, the Ford Pinto issue mostly deals with honesty, responsibility, and fidelity. Ford should’ve been more honest with their consumers about the safety of the car so that people would have to option to keep themselves save and alive. As a maker of possibly dangerous equipment, Ford has a responsibility to their consumers to provide the safest products and to keep them informed of the dangers of using them. Finally when exhibiting fidelity, Ford has the responsibility to uphold the trust of their consumers and their employees who think that they are making safe vehicles.'}</p>
  </>
);

const Cpre494 = () => (
  <>
    <Head>
      <title>{'CprE 494'}</title>
      <meta content='Assignments completed for CprE 494: Senior Portfolio' name='description'/>
    </Head>

    <StyledTitleBox>
      <h1>{'CprE 494 Senior Portfolio Assignments'}</h1>
      <h3>{'This is a collection of assignments to meet the requirements for the CprE 494 Senior Portfolio'}</h3>
    </StyledTitleBox>
    <StyledInfoListContainer>
      <InfoSection
        collapse={<EthicsEssay/>}
        date=''
        header='CprE 394 Ethics Essay'
        subheader=''
      />
    </StyledInfoListContainer>
  </>
);

export default Cpre494;
