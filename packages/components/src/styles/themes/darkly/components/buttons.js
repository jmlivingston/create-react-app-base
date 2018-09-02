const code = {
  ".btn": {
    "display": "inline-block",
    "fontWeight": "400",
    "textAlign": "center",
    "whiteSpace": "nowrap",
    "verticalAlign": "middle",
    "userSelect": "none",
    "border": "1px solid transparent",
    "padding": "0.375rem 0.75rem",
    "fontSize": "0.9375rem",
    "lineHeight": "1.5",
    "borderRadius": "0.25rem",
    "transition": "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"
  },
  "@media screen and (prefers-reduced-motion: reduce)": {
    ".btn": {
      "transition": "none"
    }
  },
  ".btn:hover, .btn:focus": {
    "textDecoration": "none"
  },
  ".btn:focus, .btn.focus": {
    "outline": "0",
    "boxShadow": "0 0 0 0.2rem rgba(55, 90, 127, 0.25)"
  },
  ".btn.disabled, .btn:disabled": {
    "opacity": "0.65"
  },
  ".btn:not(:disabled):not(.disabled)": {
    "cursor": "pointer"
  },
  ".btn:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active": {
    "backgroundImage": "none"
  },
  "a.btn.disabled, fieldset:disabled a.btn": {
    "pointerEvents": "none"
  },
  ".btn-primary": {
    "color": "#fff",
    "backgroundColor": "blue",
    "borderColor": "#375a7f"
  },
  ".btn-primary:hover": {
    "color": "#fff",
    "backgroundColor": "#2b4764",
    "borderColor": "#28415b"
  },
  ".btn-primary:focus, .btn-primary.focus": {
    "boxShadow": "0 0 0 0.2rem rgba(55, 90, 127, 0.5)"
  },
  ".btn-primary.disabled, .btn-primary:disabled": {
    "color": "#fff",
    "backgroundColor": "#375a7f",
    "borderColor": "#375a7f"
  },
  ".btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle": {
    "color": "#fff",
    "backgroundColor": "#28415b",
    "borderColor": "#243a53"
  },
  ".btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus": {
    "boxShadow": "0 0 0 0.2rem rgba(55, 90, 127, 0.5)"
  },
  ".btn-secondary": {
    "color": "#fff",
    "backgroundColor": "#444",
    "borderColor": "#444"
  },
  ".btn-secondary:hover": {
    "color": "#fff",
    "backgroundColor": "#313131",
    "borderColor": "#2b2b2b"
  },
  ".btn-secondary:focus, .btn-secondary.focus": {
    "boxShadow": "0 0 0 0.2rem rgba(68, 68, 68, 0.5)"
  },
  ".btn-secondary.disabled, .btn-secondary:disabled": {
    "color": "#fff",
    "backgroundColor": "#444",
    "borderColor": "#444"
  },
  ".btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle": {
    "color": "#fff",
    "backgroundColor": "#2b2b2b",
    "borderColor": "#242424"
  },
  ".btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus": {
    "boxShadow": "0 0 0 0.2rem rgba(68, 68, 68, 0.5)"
  },
  ".btn-success": {
    "color": "#fff",
    "backgroundColor": "#00bc8c",
    "borderColor": "#00bc8c"
  },
  ".btn-success:hover": {
    "color": "#fff",
    "backgroundColor": "#009670",
    "borderColor": "#008966"
  },
  ".btn-success:focus, .btn-success.focus": {
    "boxShadow": "0 0 0 0.2rem rgba(0, 188, 140, 0.5)"
  },
  ".btn-success.disabled, .btn-success:disabled": {
    "color": "#fff",
    "backgroundColor": "#00bc8c",
    "borderColor": "#00bc8c"
  },
  ".btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active, .show > .btn-success.dropdown-toggle": {
    "color": "#fff",
    "backgroundColor": "#008966",
    "borderColor": "#007c5d"
  },
  ".btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus, .show > .btn-success.dropdown-toggle:focus": {
    "boxShadow": "0 0 0 0.2rem rgba(0, 188, 140, 0.5)"
  },
  ".btn-info": {
    "color": "#fff",
    "backgroundColor": "#3498DB",
    "borderColor": "#3498DB"
  },
  ".btn-info:hover": {
    "color": "#fff",
    "backgroundColor": "#2384c6",
    "borderColor": "#217dbb"
  },
  ".btn-info:focus, .btn-info.focus": {
    "boxShadow": "0 0 0 0.2rem rgba(52, 152, 219, 0.5)"
  },
  ".btn-info.disabled, .btn-info:disabled": {
    "color": "#fff",
    "backgroundColor": "#3498DB",
    "borderColor": "#3498DB"
  },
  ".btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active, .show > .btn-info.dropdown-toggle": {
    "color": "#fff",
    "backgroundColor": "#217dbb",
    "borderColor": "#1f76b0"
  },
  ".btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus, .show > .btn-info.dropdown-toggle:focus": {
    "boxShadow": "0 0 0 0.2rem rgba(52, 152, 219, 0.5)"
  },
  ".btn-warning": {
    "color": "#222",
    "backgroundColor": "#F39C12",
    "borderColor": "#F39C12"
  },
  ".btn-warning:hover": {
    "color": "#fff",
    "backgroundColor": "#d4860b",
    "borderColor": "#c87f0a"
  },
  ".btn-warning:focus, .btn-warning.focus": {
    "boxShadow": "0 0 0 0.2rem rgba(243, 156, 18, 0.5)"
  },
  ".btn-warning.disabled, .btn-warning:disabled": {
    "color": "#222",
    "backgroundColor": "#F39C12",
    "borderColor": "#F39C12"
  },
  ".btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active, .show > .btn-warning.dropdown-toggle": {
    "color": "#fff",
    "backgroundColor": "#c87f0a",
    "borderColor": "#bc770a"
  },
  ".btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-warning.dropdown-toggle:focus": {
    "boxShadow": "0 0 0 0.2rem rgba(243, 156, 18, 0.5)"
  },
  ".btn-danger": {
    "color": "#fff",
    "backgroundColor": "#E74C3C",
    "borderColor": "#E74C3C"
  },
  ".btn-danger:hover": {
    "color": "#fff",
    "backgroundColor": "#e12e1c",
    "borderColor": "#d62c1a"
  },
  ".btn-danger:focus, .btn-danger.focus": {
    "boxShadow": "0 0 0 0.2rem rgba(231, 76, 60, 0.5)"
  },
  ".btn-danger.disabled, .btn-danger:disabled": {
    "color": "#fff",
    "backgroundColor": "#E74C3C",
    "borderColor": "#E74C3C"
  },
  ".btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active, .show > .btn-danger.dropdown-toggle": {
    "color": "#fff",
    "backgroundColor": "#d62c1a",
    "borderColor": "#ca2a19"
  },
  ".btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-danger.dropdown-toggle:focus": {
    "boxShadow": "0 0 0 0.2rem rgba(231, 76, 60, 0.5)"
  },
  ".btn-light": {
    "color": "#fff",
    "backgroundColor": "#303030",
    "borderColor": "#303030"
  },
  ".btn-light:hover": {
    "color": "#fff",
    "backgroundColor": "#1d1d1d",
    "borderColor": "#171717"
  },
  ".btn-light:focus, .btn-light.focus": {
    "boxShadow": "0 0 0 0.2rem rgba(48, 48, 48, 0.5)"
  },
  ".btn-light.disabled, .btn-light:disabled": {
    "color": "#fff",
    "backgroundColor": "#303030",
    "borderColor": "#303030"
  },
  ".btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active, .show > .btn-light.dropdown-toggle": {
    "color": "#fff",
    "backgroundColor": "#171717",
    "borderColor": "#101010"
  },
  ".btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus, .show > .btn-light.dropdown-toggle:focus": {
    "boxShadow": "0 0 0 0.2rem rgba(48, 48, 48, 0.5)"
  },
  ".btn-dark": {
    "color": "#fff",
    "backgroundColor": "#303030",
    "borderColor": "#303030"
  },
  ".btn-dark:hover": {
    "color": "#fff",
    "backgroundColor": "#1d1d1d",
    "borderColor": "#171717"
  },
  ".btn-dark:focus, .btn-dark.focus": {
    "boxShadow": "0 0 0 0.2rem rgba(48, 48, 48, 0.5)"
  },
  ".btn-dark.disabled, .btn-dark:disabled": {
    "color": "#fff",
    "backgroundColor": "#303030",
    "borderColor": "#303030"
  },
  ".btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active, .show > .btn-dark.dropdown-toggle": {
    "color": "#fff",
    "backgroundColor": "#171717",
    "borderColor": "#101010"
  },
  ".btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-dark.dropdown-toggle:focus": {
    "boxShadow": "0 0 0 0.2rem rgba(48, 48, 48, 0.5)"
  },
  ".btn-outline-primary": {
    "color": "#375a7f",
    "backgroundColor": "transparent",
    "backgroundImage": "none",
    "borderColor": "#375a7f"
  },
  ".btn-outline-primary:hover": {
    "color": "#fff",
    "backgroundColor": "#375a7f",
    "borderColor": "#375a7f"
  },
  ".btn-outline-primary:focus, .btn-outline-primary.focus": {
    "boxShadow": "0 0 0 0.2rem rgba(55, 90, 127, 0.5)"
  },
  ".btn-outline-primary.disabled, .btn-outline-primary:disabled": {
    "color": "#375a7f",
    "backgroundColor": "transparent"
  },
  ".btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .show > .btn-outline-primary.dropdown-toggle": {
    "color": "#fff",
    "backgroundColor": "#375a7f",
    "borderColor": "#375a7f"
  },
  ".btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-primary.dropdown-toggle:focus": {
    "boxShadow": "0 0 0 0.2rem rgba(55, 90, 127, 0.5)"
  },
  ".btn-outline-secondary": {
    "color": "#444",
    "backgroundColor": "transparent",
    "backgroundImage": "none",
    "borderColor": "#444"
  },
  ".btn-outline-secondary:hover": {
    "color": "#fff",
    "backgroundColor": "#444",
    "borderColor": "#444"
  },
  ".btn-outline-secondary:focus, .btn-outline-secondary.focus": {
    "boxShadow": "0 0 0 0.2rem rgba(68, 68, 68, 0.5)"
  },
  ".btn-outline-secondary.disabled, .btn-outline-secondary:disabled": {
    "color": "#444",
    "backgroundColor": "transparent"
  },
  ".btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active, .show > .btn-outline-secondary.dropdown-toggle": {
    "color": "#fff",
    "backgroundColor": "#444",
    "borderColor": "#444"
  },
  ".btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-secondary.dropdown-toggle:focus": {
    "boxShadow": "0 0 0 0.2rem rgba(68, 68, 68, 0.5)"
  },
  ".btn-outline-success": {
    "color": "#00bc8c",
    "backgroundColor": "transparent",
    "backgroundImage": "none",
    "borderColor": "#00bc8c"
  },
  ".btn-outline-success:hover": {
    "color": "#fff",
    "backgroundColor": "#00bc8c",
    "borderColor": "#00bc8c"
  },
  ".btn-outline-success:focus, .btn-outline-success.focus": {
    "boxShadow": "0 0 0 0.2rem rgba(0, 188, 140, 0.5)"
  },
  ".btn-outline-success.disabled, .btn-outline-success:disabled": {
    "color": "#00bc8c",
    "backgroundColor": "transparent"
  },
  ".btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active, .show > .btn-outline-success.dropdown-toggle": {
    "color": "#fff",
    "backgroundColor": "#00bc8c",
    "borderColor": "#00bc8c"
  },
  ".btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-success.dropdown-toggle:focus": {
    "boxShadow": "0 0 0 0.2rem rgba(0, 188, 140, 0.5)"
  },
  ".btn-outline-info": {
    "color": "#3498DB",
    "backgroundColor": "transparent",
    "backgroundImage": "none",
    "borderColor": "#3498DB"
  },
  ".btn-outline-info:hover": {
    "color": "#fff",
    "backgroundColor": "#3498DB",
    "borderColor": "#3498DB"
  },
  ".btn-outline-info:focus, .btn-outline-info.focus": {
    "boxShadow": "0 0 0 0.2rem rgba(52, 152, 219, 0.5)"
  },
  ".btn-outline-info.disabled, .btn-outline-info:disabled": {
    "color": "#3498DB",
    "backgroundColor": "transparent"
  },
  ".btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active, .show > .btn-outline-info.dropdown-toggle": {
    "color": "#fff",
    "backgroundColor": "#3498DB",
    "borderColor": "#3498DB"
  },
  ".btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-info.dropdown-toggle:focus": {
    "boxShadow": "0 0 0 0.2rem rgba(52, 152, 219, 0.5)"
  },
  ".btn-outline-warning": {
    "color": "#F39C12",
    "backgroundColor": "transparent",
    "backgroundImage": "none",
    "borderColor": "#F39C12"
  },
  ".btn-outline-warning:hover": {
    "color": "#222",
    "backgroundColor": "#F39C12",
    "borderColor": "#F39C12"
  },
  ".btn-outline-warning:focus, .btn-outline-warning.focus": {
    "boxShadow": "0 0 0 0.2rem rgba(243, 156, 18, 0.5)"
  },
  ".btn-outline-warning.disabled, .btn-outline-warning:disabled": {
    "color": "#F39C12",
    "backgroundColor": "transparent"
  },
  ".btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active, .show > .btn-outline-warning.dropdown-toggle": {
    "color": "#222",
    "backgroundColor": "#F39C12",
    "borderColor": "#F39C12"
  },
  ".btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-warning.dropdown-toggle:focus": {
    "boxShadow": "0 0 0 0.2rem rgba(243, 156, 18, 0.5)"
  },
  ".btn-outline-danger": {
    "color": "#E74C3C",
    "backgroundColor": "transparent",
    "backgroundImage": "none",
    "borderColor": "#E74C3C"
  },
  ".btn-outline-danger:hover": {
    "color": "#fff",
    "backgroundColor": "#E74C3C",
    "borderColor": "#E74C3C"
  },
  ".btn-outline-danger:focus, .btn-outline-danger.focus": {
    "boxShadow": "0 0 0 0.2rem rgba(231, 76, 60, 0.5)"
  },
  ".btn-outline-danger.disabled, .btn-outline-danger:disabled": {
    "color": "#E74C3C",
    "backgroundColor": "transparent"
  },
  ".btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active, .show > .btn-outline-danger.dropdown-toggle": {
    "color": "#fff",
    "backgroundColor": "#E74C3C",
    "borderColor": "#E74C3C"
  },
  ".btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-danger.dropdown-toggle:focus": {
    "boxShadow": "0 0 0 0.2rem rgba(231, 76, 60, 0.5)"
  },
  ".btn-outline-light": {
    "color": "#303030",
    "backgroundColor": "transparent",
    "backgroundImage": "none",
    "borderColor": "#303030"
  },
  ".btn-outline-light:hover": {
    "color": "#fff",
    "backgroundColor": "#303030",
    "borderColor": "#303030"
  },
  ".btn-outline-light:focus, .btn-outline-light.focus": {
    "boxShadow": "0 0 0 0.2rem rgba(48, 48, 48, 0.5)"
  },
  ".btn-outline-light.disabled, .btn-outline-light:disabled": {
    "color": "#303030",
    "backgroundColor": "transparent"
  },
  ".btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active, .show > .btn-outline-light.dropdown-toggle": {
    "color": "#fff",
    "backgroundColor": "#303030",
    "borderColor": "#303030"
  },
  ".btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-light.dropdown-toggle:focus": {
    "boxShadow": "0 0 0 0.2rem rgba(48, 48, 48, 0.5)"
  },
  ".btn-outline-dark": {
    "color": "#303030",
    "backgroundColor": "transparent",
    "backgroundImage": "none",
    "borderColor": "#303030"
  },
  ".btn-outline-dark:hover": {
    "color": "#fff",
    "backgroundColor": "#303030",
    "borderColor": "#303030"
  },
  ".btn-outline-dark:focus, .btn-outline-dark.focus": {
    "boxShadow": "0 0 0 0.2rem rgba(48, 48, 48, 0.5)"
  },
  ".btn-outline-dark.disabled, .btn-outline-dark:disabled": {
    "color": "#303030",
    "backgroundColor": "transparent"
  },
  ".btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active, .show > .btn-outline-dark.dropdown-toggle": {
    "color": "#fff",
    "backgroundColor": "#303030",
    "borderColor": "#303030"
  },
  ".btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-dark.dropdown-toggle:focus": {
    "boxShadow": "0 0 0 0.2rem rgba(48, 48, 48, 0.5)"
  },
  ".btn-link": {
    "fontWeight": "400",
    "color": "#00bc8c",
    "backgroundColor": "transparent"
  },
  ".btn-link:hover": {
    "color": "#007053",
    "textDecoration": "underline",
    "backgroundColor": "transparent",
    "borderColor": "transparent"
  },
  ".btn-link:focus, .btn-link.focus": {
    "textDecoration": "underline",
    "borderColor": "transparent",
    "boxShadow": "none"
  },
  ".btn-link:disabled, .btn-link.disabled": {
    "color": "#999",
    "pointerEvents": "none"
  },
  ".btn-lg": {
    "padding": "0.5rem 1rem",
    "fontSize": "1.17188rem",
    "lineHeight": "1.5",
    "borderRadius": "0.3rem"
  },
  ".btn-sm": {
    "padding": "0.25rem 0.5rem",
    "fontSize": "0.82031rem",
    "lineHeight": "1.5",
    "borderRadius": "0.2rem"
  },
  ".btn-block": {
    "display": "block",
    "width": "100%"
  },
  ".btn-block + .btn-block": {
    "marginTop": "0.5rem"
  },
  "input[type=\"submit\"].btn-block, input[type=\"reset\"].btn-block, input[type=\"button\"].btn-block": {
    "width": "100%"
  }
} 
 export default code