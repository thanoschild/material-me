import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Concise and Clear Documentation',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Access straightforward, easy-to-understand guides and tutorials that get straight to the point, 
       making it simple to grasp complex concepts quickly.
      </>
    ),
  },
  {
    title: 'Organized Content Structure',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Navigate seamlessly through well-structured categories covering topics like System Design, 
        Cloud computing, and OOP, ensuring you find relevant information without hassle.
      </>
    ),
  },
  {
    title: 'Hands-On Examples',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Learn through practical examples and code snippets that illustrate real-world applications, 
        making it easier to implement concepts in your own projects.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
