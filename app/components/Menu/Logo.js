import React, {Component} from 'react'

import {SvgLogo, SvgLogoLine} from './style'

export default class Logo extends Component {
  render() {
    return (
      <SvgLogo fillHover="#fff">
        <title>Novel logo small</title>
        <SvgLogoLine
          d="M7.3,12.56V6.86H32.7v5.7H7.3Z"
          transform="translate(-7.3 -6.86)"
          fill="#424242"
        />

        <SvgLogoLine
          d="M7.3,22.85V18.11h15v4.74H7.3Z"
          transform="translate(-7.3 -6.86)"
          fill="#e0e0e0"
        />
        <SvgLogoLine
          d="M7.3,33.62V28.88h15v4.74H7.3Z"
          transform="translate(-7.3 -6.86)"
          fill="#2962ff"
        />
      </SvgLogo>
    )
  }
}
