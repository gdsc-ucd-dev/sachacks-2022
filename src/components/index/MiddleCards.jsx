import dynamic from 'next/dynamic';
import { CARDDATA } from '../../data';
import { Design, Code, Launch } from '../../design/Cards';
const Card = dynamic(() => import('../index/reusable/Card'));
export default function MiddleCards() {
  return (
    <section className="w-full">
      <div
        id="about"
        className="w-full max-w-6xl mx-auto px-8 py-16 flex flex-col justify-center items-start"
      >
        <section className="w-full flex flex-col justify-between items-center gap-12">
          <div className="w-full">
            <h2 className="text-4xl font-bold text-mainColor">Our Values</h2>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card text={'Design'} description={CARDDATA.design}>
              <Design className={'w-full'} />
            </Card>
            <Card text={'Code'} description={CARDDATA.code}>
              <Code className={'w-full'} />
            </Card>
            <Card text={'Launch'} description={CARDDATA.launch}>
              <Launch className={'w-full'} />
            </Card>
          </div>
        </section>
      </div>
    </section>
  );
}
