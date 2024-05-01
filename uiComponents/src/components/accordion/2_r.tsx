import { useState } from 'react';
import cx from './cx';
import { data } from './data';

const AccordionItem = ({
  id,
  title,
  description,
  current,
  toggle,
}: {
  id: string;
  title: string;
  description: string;
  current: boolean;
  toggle: () => void;
}) => {
  return (
    <li className={cx('item', 'item2', { current })} key={id}>
      <div className={cx('tab')} onClick={toggle}>
        {title}
      </div>
      {/* current일 때 보여준다 */}
      <div className={cx('description')}>{description}</div>{' '}
    </li>
  );
};

/**
 * Accordion2 는 css 방식으로 show/hide 를 구현한 아코디언이다.
 * .item2 클래스를 참조한다
 *  description은 평소에 display: none; 이다가 current일 때 display: block; 이 된다.
 */
const Accordion2 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);
  const new_toggleItem = (id: string) => () => {
    setCurrentId((prev) => (prev === id ? null : id));
  };
  return (
    <>
      <h3>
        #2. React<sub>css로 hidden/show 처리</sub>
      </h3>
      <ul className={cx('container')}>
        {data.map((d) => (
          <AccordionItem
            {...d}
            key={d.id}
            current={currentId === d.id}
            toggle={new_toggleItem(d.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Accordion2;
