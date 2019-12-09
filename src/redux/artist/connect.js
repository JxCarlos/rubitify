import { connect } from "react-redux";

import { mapStateToProps, mapDispatchToProps } from "./props";

const bindArtist = Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);

export { bindArtist };
