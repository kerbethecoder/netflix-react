import { footerLinks } from '../constants';
import { styles } from '../ui';

const Footer = () => {
  return (
    <section className={`text-white ${styles.flexCenter} flex-col px-72 pt-20`}>
      <div className={`${styles.flexFooter} gap-52`}>
        <div>
          {footerLinks
            .slice(0, 1, Math.ceil(footerLinks.length / 2))
            .map((item) => (
              <div key={item.id}>
                <ul>
                  {item.content.map((link) => (
                    <li
                      key={link.id}
                      className="py-1 font-lato text-lg cursor-pointer text-dimWhite hover:text-red-500">
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <div>
          {footerLinks
            .slice(1, Math.ceil(footerLinks.length / 2))
            .map((item) => (
              <div key={item.id}>
                <ul>
                  {item.content.map((link) => (
                    <li
                      key={link.id}
                      className="py-1 font-lato text-lg cursor-pointer text-dimWhite hover:text-red-500">
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <div>
          {footerLinks.slice(Math.ceil(footerLinks.length / 2)).map((item) => (
            <div key={item.id}>
              <ul>
                {item.content.map((link) => (
                  <li
                    key={link.id}
                    className="py-1 font-lato text-lg cursor-pointer text-dimWhite hover:text-red-500">
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <h4 className="mt-16 text-xl font-lato font-black underline text-dimWhite hover:text-red-500 cursor-pointer">
        Questions? Contact Us.
      </h4>
      <p className="font-lato text-base text-dimWhite">
        Not Netflix Philippines
      </p>
      <hr className="border w-full border-[rgb(255,255,255,0.2)] mt-16" />
      <h3 className="font-lato text-dimWhite text-sm my-4">
        Mock Website by{' '}
        <a
          href="https://kerbethecoder.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:text-red-500">
          @kerbethecoder
        </a>{' '}
        |{' '}
        <a
          href="mailto:krbycnts@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500">
          krby.cnts@gmail.com
        </a>
      </h3>
    </section>
  );
};

export default Footer;
