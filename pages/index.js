import Head from "next/head";

export default () =>
  <div>
    <style global jsx>{`
      html,
      body {
        background: #1c1c35;
        padding: 0 0 5rem 0;
        margin: 0;
        overflow-x: hidden;
      }
      p,
      a {
        font-family: 'Open Sans', sans-serif;
        color: #2f9e98;
      }

      h1,
      h2,
      h3,
      h4 {
        font-family: 'Alegreya', serif;
      }

      h1 {
        font-size: 55px;
        color: #2f9e98;
      }
    `}</style>
    <style jsx>{`
      header {
        max-width: 40em;
        margin-left: auto;
        margin-right: auto;
      }

      header img {
        vertical-align: text-top;
        margin-top: 5px;
        max-width: 60px;
      }

      header h1 {
        background: #2f9e98;
        color: #1c1c35;
        padding-left: 20px;
        padding-right: 20px;
      }

      header p {
        background: #2f9e98;
        color: #1c1c35;
        /*margin-left: calc(-50vw + 50%);*/
        margin-top: 0;
        margin-bottom: 0;
        padding: 20px;
      }

      header a {
        color: #1c1c35;
      }

      header strong {
        color: #760f2c;
      }

      .track-type {
        max-width: 40em;
        margin-left: auto;
        margin-right: auto;
        display: block;
      }

      .track-type p {
        color: #badfdd;
        padding-left: 20px;
        font-size: 16px;
      }

      .track-type h2 {
        color: #2f9e98;
        padding-top: 20px;
        padding-left: 5px;
        font-size: 42px;
      }

      .track-type h3 {
        border-top: 2px dotted #224756;
        padding-top: 20px;
        margin-bottom: 6px;
        padding-bottom: 6px;
        margin-top: 40px;
        padding-left: 20px;
        color: #2f9e98;
        font-size: 30px;
      }
    `}</style>
    <Head>
      <meta charset="UTF-8" />
      <title>O hai, Minnesota!</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alegreya:400,700"
        rel="stylesheet"
        type="text/css"
      />
    </Head>
    <header>
      <h1 id="-image-of-minnesota-assets-mn-svg-o-hai-minnesota-">
        <img src="/static/mn.svg" alt="Image of Minnesota" /> O, Hai Minnesota!
      </h1>
      <p>Ahoy there. </p>
      <p>
        The following is a{" "}
        <strong>
          currated list of Minnesota&#39;s online tech communities and
          conferences
        </strong>{" "}
        in the areas of tech, design, etc. It is maintained by{" "}
        <a href="https://twitter.com/jimthedev">@jimthedev</a> in a{" "}
        <a href="https://github.com/ohaimn/o.hai.mn">Github repository</a>.
        Please{" "}
        <a href="https://github.com/ohaimn/o.hai.mn/issues/new">
          open an issue
        </a>{" "}
        to add, modify or delete communities or conferences. If you run your own
        Slack community, we highly recommend using{" "}
        <a href="https://github.com/rauchg/slackin">Slackin&#39;</a> to manage
        public invites. Enjoy! :)
      </p>
    </header>
    <communities className="track-type">
      <h2 id="our-online-communities">Our online communities</h2>
      <h3 id="open-twin-cities">Open Twin Cities</h3>
      <p>
        We are a group of civic hackers, technologists, public servants, and
        community leaders focused on improving the technology of our cities.
      </p>
      <p>
        <a href="https://opentwincities.slack.com">
          <img
            src="https://otc-slackin.azurewebsites.net/badge.svg"
            alt="Slack Status"
          />
        </a>
      </p>
      <p>
        Slack:{" "}
        <a href="https://opentwincities.slack.com">
          https://opentwincities.slack.com
        </a>
      </p>
      <p>
        Slack invite site:{" "}
        <a href="https://otc-slackin.azurewebsites.net/">
          https://otc-slackin.azurewebsites.net/
        </a>
      </p>
      <p>
        Meetup group:{" "}
        <a href="https://www.meetup.com/OpenTwinCities/">
          https://www.meetup.com/OpenTwinCities/
        </a>
      </p>
      <p>
        Website:{" "}
        <a href="http://www.opentwincities.org/">
          http://www.opentwincities.org/
        </a>
      </p>
      <h3 id="react-minneapolis">React Minneapolis</h3>
      <p>
        <a href="https://reactmpls.slack.com">
          <img
            src="https://images.weserv.nl/?url=chat.reactmpls.io/badge.svg"
            alt="Slack Status"
          />
        </a>
      </p>
      <p>
        Slack:{" "}
        <a href="https://reactmpls.slack.com">https://reactmpls.slack.com</a>
      </p>
      <p>
        Invite site:{" "}
        <a href="http://chat.reactmpls.io/">http://chat.reactmpls.io/</a>
      </p>
      <p>
        Meetup group:{" "}
        <a href="https://www.meetup.com/React-Minneapolis-Meetup/">
          https://www.meetup.com/React-Minneapolis-Meetup/
        </a>
      </p>
      <h3 id="javascript-minnesota">Javascript Minnesota</h3>
      <p>
        Slack:{" "}
        <a href="https://javascript-mn.slack.com">
          https://javascript-mn.slack.com
        </a>
      </p>
      <p>
        Invite site:{" "}
        <a href="https://javascriptmn-slack.herokuapp.com">
          http://javascriptmn-slack.herokuapp.com
        </a>
      </p>
      <p>
        To get an invite code, join the{" "}
        <a href="https://www.meetup.com/JavaScriptMN/">
          JavascriptMN meetup group
        </a>{" "}
        and you will be emailed a code.
      </p>
      <h3 id="angularmn">AngularMN</h3>
      <p>
        <a href="https://angularmn.slack.com">
          <img
            src="https://angularmn-slack.herokuapp.com/badge.svg"
            alt="Slack Status"
          />
        </a>
      </p>
      <p>
        Slack:{" "}
        <a href="https://angularmn.slack.com">https://angularmn.slack.com</a>
      </p>
      <p>
        Invites:{" "}
        <a href="https://angularmn-slack.herokuapp.com">
          https://angularmn-slack.herokuapp.com
        </a>
      </p>
      <p>
        Meetup group:{" "}
        <a href="http://www.meetup.com/AngularMN/">
          http://www.meetup.com/AngularMN/
        </a>
      </p>
      <h3 id="design-minn">Design Minn Slack</h3>
      <p>
        Lonely freelancer? Extroverted lurker? Hunting for a gig? We're a Slack
        community for Minnesota based designers. We talk about Print, UI/UX
        Design, Jobs, Illustrations, Freelancing, Agency News, Critiques,
        Photography, and oh so much more!
      </p>
      <p>
        Slack:{" "}
        <a href="https://designminn.slack.com">https://designminn.slack.com</a>
      </p>
      <p>
        Invites:{" "}
        <a href="https://design-minn.webflow.io/">
          https://design-minn.webflow.io/
        </a>
      </p>
      <h3 id="minnesota-ux">Minnesota UX Slack</h3>
      <p>
        Slack: <a href="https://mnux.slack.com">https://mnux.slack.com</a>
      </p>
      <p>Invites: Send an email to: <a href="mailto:scherf.ryan@gmail.com">scherf.ryan@gmail.com</a></p>
      <h3 id="msptech-slack">MSPTech Slack</h3>
      <p>
        <a href="https://msptech.slack.com">
          <img
            src="https://msptech.herokuapp.com/badge.svg"
            alt="Slack Status"
          />
        </a>
      </p>
      <p>
        Slack: <a href="https://msptech.slack.com">https://msptech.slack.com</a>
      </p>
      <p>
        Invites:{" "}
        <a href="http://msptech.herokuapp.com">http://msptech.herokuapp.com</a>
      </p>
      <h3 id="msp-gamedev-slack">MSP Gamedev Slack</h3>
      <p>
        <a href="https://mspgamedev.slack.com">
          <img
            src="https://mspgamedevslack.herokuapp.com/badge.svg"
            alt="Slack Status"
          />
        </a>
      </p>
      <p>
        Slack:{" "}
        <a href="https://mspgamedev.slack.com">https://mspgamedev.slack.com</a>
      </p>
      <p>
        Invites:{" "}
        <a href="http://mspgamedevslack.herokuapp.com">
          http://mspgamedevslack.herokuapp.com
        </a>
      </p>
      <h3 id="minnesota-php-user-group">Minnesota PHP User Group</h3>
      <p>
        <a href="https://mnphp.slack.com">
          <img
            src="https://images.weserv.nl/?url=slack.mnphp.org/badge.svg"
            alt="Slack Status"
          />
        </a>
      </p>
      <p>
        Slack: <a href="https://mnphp.slack.com">https://mnphp.slack.com</a>
      </p>
      <p>
        Invites: <a href="http://slack.mnphp.org">http://slack.mnphp.org</a>
      </p>
      <p>
        Meetup group:{" "}
        <a href="http://www.meetup.com/mn-php/">
          http://www.meetup.com/mn-php/
        </a>
      </p>
      <h3 id="software-devs-of-rochmn">Software Devs of RochMN</h3>
      <p>Software developers of Rochester Minnesota</p>
      <p>
        <a href="https://softwaredevsofrochmn.slack.com">
          <img
            src="https://images.weserv.nl/?url=softwaredevslack.cube.mn/badge.svg"
            alt="Slack Status"
          />
        </a>
      </p>
      <p>
        Slack:{" "}
        <a href="https://softwaredevsofrochmn.slack.com">
          https://softwaredevsofrochmn.slack.com
        </a>
      </p>
      <p>
        Invites:{" "}
        <a href="http://softwaredevslack.cube.mn">
          http://softwaredevslack.cube.mn
        </a>
      </p>
      <h3 id="buddy-league">Buddy League</h3>
      <p>A supportive community for friendly creatives.</p>
      <p>
        Slack:{" "}
        <a href="https://buddyleague.slack.com">
          https://buddyleague.slack.com{" "}
        </a>
      </p>
      <p>
        Slack invite via email:{" "}
        <a href="mailto:meg@ghostlyferns.com">meg@ghostlyferns.com</a>
      </p>
      <p>
        Meetup group:{" "}
        <a href="https://www.meetup.com/React-Minneapolis-Meetup/">
          https://www.meetup.com/React-Minneapolis-Meetup/
        </a>
      </p>
      <h3 id="cocoaheads-mn">CocoaHeads MN</h3>
      <p>A community gathering for people interested in developing software for the Apple devices.</p>
      <p>
        Slack:{" "}
        <a href="https://cocoaheadsmn.slack.com/">
          https://cocoaheadsmn.slack.com/{" "}
        </a>
      </p>
      <p>
        Slack invite via email:{" "}
        <a href="mailto:cocoaheadsmn@pixelresearchlabs.com">cocoaheadsmn@pixelresearchlabs.com</a>
      </p>
      <p>
        Website:{" "}
        <a href="http://www.cocoaheadsmn.org/">
          http://www.cocoaheadsmn.org/
        </a>
      </p>
    </communities>
    <conferences className="track-type">
      <h2 id="our-tech-conferences">Our tech conferences</h2>
      <h3 id="open-source-north">Open Source North</h3>
      <p>
        Website:{" "}
        <a href="http://opensourcenorth.com">http://opensourcenorth.com</a>
      </p>
      <p>
        Slack:{" "}
        <a href="https://opensourcenorth.slack.com">
          https://opensourcenorth.slack.com
        </a>
      </p>
      <p>Invites: Buy a ticket :)</p>
      <h3 id="midwest-js">Midwest JS</h3>
      <p>
        Website: <a href="http://midwestjs.com/">http://midwestjs.com/</a>
      </p>
      <h3 id="midwest-php">Midwest PHP</h3>
      <p>
        Website: <a href="http://midwestphp.org">http://midwestphp.org</a>
      </p>
      <p>Slack: See Minnesota PHP User Group Slack</p>
      <h3 id="gr8conf-us-grovy-and-grails-">GR8Conf US (Grovy and Grails)</h3>
      <p>
        Website: <a href="http://gr8conf.us/#/">http://gr8conf.us/#/</a>
      </p>
    </conferences>
  </div>;
