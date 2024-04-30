import { useState } from 'react';
import cx from './cx';
import { data } from './data';

const AccordionItem = ({
  id,
  title,
  description,
  current,
  //   toggleItem,
  toggle,
}: {
  id: string;
  title: string;
  description: string;
  current: boolean;
  //   toggleItem: (id: string) => void;
  toggle: () => void;
}) => {
  return (
    <li className={cx('item', { current })} key={id}>
      {/* <div className={cx('tab')} onClick={() => toggleItem(id)}> */}
      <div className={cx('tab')} onClick={toggle}>
        {title}
      </div>
      {current ? <div className={cx('description')}>{description}</div> : null}
    </li>
  );
};

/**
 * Accordion1은 currentId 상태값과 id 값을 비교하여 current 상태를 결정한다.
 */
const Accordion1 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);
  // const toggleItem = (id: string) => {
  //   setCurrentId((prev) => (prev === id ? null : id));
  // };
  const new_toggleItem = (id: string) => () => {
    setCurrentId((prev) => (prev === id ? null : id));
  };
  return (
    <>
      <h3>
        #1. React<sub>현재 desc만 html로 그리기</sub>
      </h3>
      <ul className={cx('container')}>
        {data.map((d) => (
          <AccordionItem
            {...d}
            key={d.id}
            current={currentId === d.id}
            // toggleItem={toggleItem}
            toggle={new_toggleItem(d.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Accordion1;
