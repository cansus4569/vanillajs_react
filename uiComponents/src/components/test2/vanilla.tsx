import { createElement } from 'react';
import VanillaWrapper from '../vanillaWrapper';

const initiator = (wrapper: HTMLDivElement) => {
  let state = false;

  const pElem = document.createElement('p');
  pElem.textContent = '꺼짐';

  const btnElem = document.createElement('button');
  btnElem.textContent = '토클';
  btnElem.addEventListener('click', () => {
    state = !state;
    pElem.textContent = state ? '켜짐' : '꺼짐';
  });

  const divElem = document.createElement('div');
  divElem.textContent = '테스트2 - 바닐라';
  divElem.append(btnElem, pElem);

  wrapper.insertAdjacentElement('beforeend', divElem);
};

const Test2_Vanilla = () => (
  <VanillaWrapper title="test2" initiator={initiator} />
);

export default Test2_Vanilla;
