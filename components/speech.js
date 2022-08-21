import { useState } from "react";
import Image from "next/image";
import pressy from "../images/pressy.png";
import Button from "./button";

const Speech = () => {
  const [more, setMore] = useState(false);
  return (
    <div className='flex gap-8 w-[90%] md:w-[80%] mx-auto my-16 flex-col md:flex-row justify-center'>
      <div className='flex flex-col items-center'>
        <Image width={384} height={378} src={pressy} alt='president' />
      </div>
      <div className='w-full md:w-[60%] text-[#006B3E]'>
        <h1 className='font-bold text-2xl md:text-3xl'>PRESIDENT`S SPEECH</h1>
        <span className='text-sm'>
          Calvary greetings to you in the name of God and Father of our Lord
          Jesus Christ Who has blessed us in Christ with every spiritual
          blessing in the heavenly realm. To Him be Glory, Power, Honour and
          Dominion now and Forever, Amen!
          <span className='my-3 block'>
            We give glory to God for his unflinching Love, Peace and Mercy over
            this Household, for His words and covenant that has always come true
            to us, for his eminent reign since ages past and even till date. Not
            by power, nor by our might but by the spirit of the Lord, and we are
            convinced and sure of this very thing, that He Who began this good
            work in us will continue until the day of Jesus Christ, developing
            and perfecting and bringing it to full completion in us! (Phil 1:6).{" "}
          </span>
          <span className={`${more ? "block" : "hidden"}`}>
            <span className='my-3 block'>
              The Promise of the Lord towards us at this time is ``RESTORATIO``.
              And I will restore for you the years that the locust has eaten–the
              hopping locust, the stripping locust, and the crawling locust, My
              great army which I sent among you (Joel 2:25). It`s the time of
              replenishment, rebuilding, renewal, remoulding and revival, God is
              said to do a new thing and the time is now.{" "}
            </span>

            <span className='my-3 block'>
              The Lord is here to restore our relationship with the father, to
              build us as a Holy and Righteous temple of God, to raise men whose
              academic stance will show forth the glory of the father, to raise
              armies who will stand for God in all aspects of life even in these
              last days.
            </span>
            <span className='my-3 block'>
              Brethren, with Jesus Joy in my heart: I announce to you that the
              New Glory has come to stay in our Lives, Families, and
              Academics...The latter glory of this house shall be greater than
              the former, says the Lord of hosts; and in this place will I give
              peace and prosperity, says the Lord of hosts (Haggai 2:9). The
              reward for work well done is more work: let us all journey
              together with the Chief_Restorer even as we receive the New Glory.{" "}
            </span>
            <span className='my-3 block'>
              For those who wait for the Lord [who expect, look for, and hope in
              Him] shall renew their strength and power; they shall lift their
              wings and mount up as eagles; they shall run and not be weary,
              they shall walk and not faint or become tired. To this end we
              raise a Clarion call unto all, let us walk in this path of
              Restoration together.{" "}
            </span>
            <span className='my-3 block'>
              May the God of peace Himself sanctify and separate you from
              profane things, make you pure and wholly consecrated to himself;
              and may your spirit, soul and body be preserved sound and
              completely blameless at the coming of our Lord Jesus Christ.The
              grace of our Lord Jesus be with you all. Amen
            </span>
          </span>
        </span>
        <Button
          text={`${more ? "Read Less" : "Read More"}]]`}
          bgColor='#FF0000'
          textColor='#fff'
          action={() => setMore(!more)}
        />
      </div>
    </div>
  );
};

export default Speech;
