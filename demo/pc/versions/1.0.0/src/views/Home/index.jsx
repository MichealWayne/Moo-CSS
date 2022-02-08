import React from 'react';
import style from './index.scss';
import classnames from 'classnames';

/**
 * 主要内容
 */
export default function Home() {
  return (
    <section className={classnames(style['m-home'])} s-theme__home="1">
      <div className={classnames(style['m-title'], 'f-tc')}>
        <img src={require('../../assets/images/logo.png')} alt="hero" />
        <h1 className={classnames(style['name'], 'g-fs50')}>Moo-CSS</h1>
        <p className={classnames(style['description'])} s-description="1">
          模块化面向对象的CSS写法规则，这是一个简单的PC demo
        </p>
        <p className={classnames(style['action'])}>
          <a
            href="https://github.com/MichealWayne/Moo-css"
            target="_blank"
            rel="noopener noreferrer"
            className={classnames(style['btn'], 'u-btn_il')}
            s-color="red"
            s-size="big"
          >
            立即了解 →
          </a>
        </p>
      </div>

      <div
        className={classnames(style['m-features'], 'u-p20 u-j-middle f-b_1px bt_1px g-mt40')}
        s-feature="1"
      >
        <div className={style['item']}>
          <h2>重用性强</h2>
          <p>样式模块化、原子化，大部分样式能直接复用。</p>
        </div>
        <div className={style['item']}>
          <h2>维护性强</h2>
          <p>分层分类，对象化的编写方式易读易改。</p>
        </div>
        <div className={style['item']}>
          <h2>拓展性强</h2>
          <p>组件的理念，简单样式能直接拼出。</p>
        </div>
      </div>

      <div className={classnames(style['m-details'], 'u-pt50 f-b_1px bt_1px g-mt20')}>
        <h3 id="介绍" className="u-paragraph g-fs20">
          <a href="#介绍" aria-hidden="true">
            #
          </a>{' '}
          介绍
        </h3>
        <p className="u-paragraph g-fs16">
          Moo-CSS (Moo,
          [mu:]哞~)是结合BEM、SMACSS、MCSS、OOCSS等写法思想总结而成的一套CSS写法规则，适用于大中小型C端项目样式开发，旨在提高开发和维护效率。
        </p>
        <p className="u-paragraph g-fs16">
          Moo-CSS有个大胆的想法：
          <strong>统一CSS写法规范。</strong>
        </p>
        <h3 id="核心" className="u-paragraph g-fs20 g-mt20">
          <a href="#核心" aria-hidden="true">
            #
          </a>{' '}
          核心
        </h3>
        <p className="u-paragraph g-fs16">组件化+面向对象。</p>
      </div>
    </section>
  );
}
