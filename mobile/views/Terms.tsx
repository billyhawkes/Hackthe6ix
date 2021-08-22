import React, {useState} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import {useHistory} from 'react-router-native';

const Terms = () => {
    const history = useHistory();
    return (
        <ScrollView>
            <Button
                onPress={() => history.push('/register/form')}
                title="Back"
            />
            <Text>
                Terms and conditions These terms and conditions (“Agreement”)
                set forth the general terms and conditions of your use of the
                “Helping Hands” mobile application (“Mobile Application” or
                “Service”) and any of its related products and services
                (collectively, “Services”). This Agreement is legally binding
                between you (“User”, “you” or “your”) and this Mobile
                Application developer (“Operator”, “we”, “us” or “our”). If you
                are entering into this agreement on behalf of a business or
                other legal entity, you represent that you have the authority to
                bind such entity to this agreement, in which case the terms
                “User”, “you” or “your” shall refer to such entity. If you do
                not have such authority, or if you do not agree with the terms
                of this agreement, you must not accept this agreement and may
                not access and use the Mobile Application and Services. By
                accessing and using the Mobile Application and Services, you
                acknowledge that you have read, understood, and agree to be
                bound by the terms of this Agreement. You acknowledge that this
                Agreement is a contract between you and the Operator, even
                though it is electronic and is not physically signed by you, and
                it governs your use of the Mobile Application and Services. This
                terms and conditions policy was created with the help of the
                terms and conditions generator. Accounts and membership You must
                be at least 13 years of age to use the Mobile Application and
                Services. By using the Mobile Application and Services and by
                agreeing to this Agreement you warrant and represent that you
                are at least 13 years of age. If you create an account in the
                Mobile Application, you are responsible for maintaining the
                security of your account and you are fully responsible for all
                activities that occur under the account and any other actions
                taken in connection with it. We may, but have no obligation to,
                monitor and review new accounts before you may sign in and start
                using the Services. Providing false contact information of any
                kind may result in the termination of your account. You must
                immediately notify us of any unauthorized uses of your account
                or any other breaches of security. We will not be liable for any
                acts or omissions by you, including any damages of any kind
                incurred as a result of such acts or omissions. We may suspend,
                disable, or delete your account (or any part thereof) if we
                determine that you have violated any provision of this Agreement
                or that your conduct or content would tend to damage our
                reputation and goodwill. If we delete your account for the
                foregoing reasons, you may not re-register for our Services. We
                may block your email address and Internet protocol address to
                prevent further registration. Links to other resources Although
                the Mobile Application and Services may link to other resources
                (such as websites, mobile applications, etc.), we are not,
                directly or indirectly, implying any approval, association,
                sponsorship, endorsement, or affiliation with any linked
                resource, unless specifically stated herein. We are not
                responsible for examining or evaluating, and we do not warrant
                the offerings of, any businesses or individuals or the content
                of their resources. We do not assume any responsibility or
                liability for the actions, products, services, and content of
                any other third parties. You should carefully review the legal
                statements and other conditions of use of any resource which you
                access through a link in the Mobile Application. Your linking to
                any other off-site resources is at your own risk. Prohibited
                uses In addition to other terms as set forth in the Agreement,
                you are prohibited from using the Mobile Application and
                Services or Content: (a) for any unlawful purpose; (b) to
                solicit others to perform or participate in any unlawful acts;
                (c) to violate any international, federal, provincial or state
                regulations, rules, laws, or local ordinances; (d) to infringe
                upon or violate our intellectual property rights or the
                intellectual property rights of others; (e) to harass, abuse,
                insult, harm, defame, slander, disparage, intimidate, or
                discriminate based on gender, sexual orientation, religion,
                ethnicity, race, age, national origin, or disability; (f) to
                submit false or misleading information; (g) to upload or
                transmit viruses or any other type of malicious code that will
                or may be used in any way that will affect the functionality or
                operation of the Mobile Application and Services, third party
                products and services, or the Internet; (h) to spam, phish,
                pharm, pretext, spider, crawl, or scrape; (i) for any obscene or
                immoral purpose; or (j) to interfere with or circumvent the
                security features of the Mobile Application and Services, third
                party products and services, or the Internet. We reserve the
                right to terminate your use of the Mobile Application and
                Services for violating any of the prohibited uses. Limitation of
                liability To the fullest extent permitted by applicable law, in
                no event will the Operator, its affiliates, directors, officers,
                employees, agents, suppliers or licensors be liable to any
                person for any indirect, incidental, special, punitive, cover or
                consequential damages (including, without limitation, damages
                for lost profits, revenue, sales, goodwill, use of content,
                impact on business, business interruption, loss of anticipated
                savings, loss of business opportunity) however caused, under any
                theory of liability, including, without limitation, contract,
                tort, warranty, breach of statutory duty, negligence or
                otherwise, even if the liable party has been advised as to the
                possibility of such damages or could have foreseen such damages.
                To the maximum extent permitted by applicable law, the aggregate
                liability of the Operator and its affiliates, officers,
                employees, agents, suppliers and licensors relating to the
                services will be limited to an amount greater of one dollar or
                any amounts actually paid in cash by you to the Operator for the
                prior one month period prior to the first event or occurrence
                giving rise to such liability. The limitations and exclusions
                also apply if this remedy does not fully compensate you for any
                losses or fails of its essential purpose. Changes and amendments
                We reserve the right to modify this Agreement or its terms
                related to the Mobile Application and Services at any time at
                our discretion. When we do, we will revise the updated date at
                the bottom of this page. We may also provide notice to you in
                other ways at our discretion, such as through the contact
                information you have provided. An updated version of this
                Agreement will be effective immediately upon the posting of the
                revised Agreement unless otherwise specified. Your continued use
                of the Mobile Application and Services after the effective date
                of the revised Agreement (or such other act specified at that
                time) will constitute your consent to those changes. Acceptance
                of these terms You acknowledge that you have read this Agreement
                and agree to all its terms and conditions. By accessing and
                using the Mobile Application and Services you agree to be bound
                by this Agreement. If you do not agree to abide by the terms of
                this Agreement, you are not authorized to access or use the
                Mobile Application and Services. Contacting us If you have any
                questions, concerns, or complaints regarding this Agreement, we
                encourage you to contact us using the details below:
                helpinghands.app.info@gmail.com This document was last updated
                on August 21, 2021 .
            </Text>
        </ScrollView>
    );
};

export default Terms;