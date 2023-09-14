import * as React from "react";
import Svg, {
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
  type SvgProps,
} from "react-native-svg";
import type { FC } from "react";

const AboutIcon: FC<SvgProps> = (props) => (
  <Svg width={382} height={52} viewBox="0 0 382 56" fill="none" {...props}>
    <Rect width={56} height={56} rx={28} fill="#6949FF" fillOpacity={0.08} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.67 17.999H32.34C35.73 17.999 38 20.379 38 23.919V32.09C38 35.62 35.73 37.999 32.34 37.999H23.67C20.28 37.999 18 35.62 18 32.09V23.919C18 20.379 20.28 17.999 23.67 17.999ZM27.99 25.06C27.52 25.06 27.13 24.669 27.13 24.19C27.13 23.7 27.52 23.31 28.01 23.31C28.49 23.31 28.88 23.7 28.88 24.19C28.88 24.669 28.49 25.06 27.99 25.06ZM28.87 31.78C28.87 32.26 28.48 32.65 27.99 32.65C27.51 32.65 27.12 32.26 27.12 31.78V27.36C27.12 26.879 27.51 26.48 27.99 26.48C28.48 26.48 28.87 26.879 28.87 27.36V31.78Z"
      fill="url(#paint0_linear_2167_31890)"
    />
    <Path
      d="M77.68 35.16C77.36 35.16 77.1 35.0867 76.9 34.94C76.7133 34.7933 76.6 34.6 76.56 34.36C76.52 34.1067 76.5667 33.8267 76.7 33.52L81.98 21.82C82.1533 21.4333 82.36 21.16 82.6 21C82.8533 20.8267 83.14 20.74 83.46 20.74C83.7667 20.74 84.04 20.8267 84.28 21C84.5333 21.16 84.7467 21.4333 84.92 21.82L90.22 33.52C90.3667 33.8267 90.42 34.1067 90.38 34.36C90.34 34.6133 90.2267 34.8133 90.04 34.96C89.8533 35.0933 89.6067 35.16 89.3 35.16C88.9267 35.16 88.6333 35.0733 88.42 34.9C88.22 34.7133 88.04 34.4333 87.88 34.06L86.58 31.04L87.66 31.74H79.22L80.3 31.04L79.02 34.06C78.8467 34.4467 78.6667 34.7267 78.48 34.9C78.2933 35.0733 78.0267 35.16 77.68 35.16ZM83.42 23.68L80.62 30.34L80.1 29.7H86.78L86.28 30.34L83.46 23.68H83.42ZM97.8228 35.2C96.9961 35.2 96.2695 34.9933 95.6428 34.58C95.0295 34.1667 94.6228 33.6133 94.4228 32.92L94.6428 32.42V33.88C94.6428 34.2933 94.5361 34.6133 94.3228 34.84C94.1095 35.0533 93.8095 35.16 93.4228 35.16C93.0228 35.16 92.7161 35.0533 92.5028 34.84C92.2895 34.6133 92.1828 34.2933 92.1828 33.88V22C92.1828 21.5867 92.2895 21.2733 92.5028 21.06C92.7161 20.8467 93.0228 20.74 93.4228 20.74C93.8228 20.74 94.1295 20.8467 94.3428 21.06C94.5695 21.2733 94.6828 21.5867 94.6828 22V27.2H94.4428C94.6561 26.5467 95.0695 26.02 95.6828 25.62C96.2961 25.22 97.0095 25.02 97.8228 25.02C98.6895 25.02 99.4428 25.2267 100.083 25.64C100.723 26.0533 101.223 26.64 101.583 27.4C101.943 28.1467 102.123 29.0467 102.123 30.1C102.123 31.14 101.943 32.0467 101.583 32.82C101.223 33.58 100.716 34.1667 100.063 34.58C99.4228 34.9933 98.6761 35.2 97.8228 35.2ZM97.1228 33.3C97.6161 33.3 98.0495 33.18 98.4228 32.94C98.7961 32.7 99.0828 32.3467 99.2828 31.88C99.4961 31.4 99.6028 30.8067 99.6028 30.1C99.6028 29.0333 99.3761 28.24 98.9228 27.72C98.4695 27.1867 97.8695 26.92 97.1228 26.92C96.6295 26.92 96.1961 27.04 95.8228 27.28C95.4495 27.5067 95.1561 27.86 94.9428 28.34C94.7428 28.8067 94.6428 29.3933 94.6428 30.1C94.6428 31.1533 94.8695 31.9533 95.3228 32.5C95.7761 33.0333 96.3761 33.3 97.1228 33.3ZM108.635 35.2C107.622 35.2 106.742 34.9933 105.995 34.58C105.248 34.1667 104.668 33.58 104.255 32.82C103.842 32.0467 103.635 31.14 103.635 30.1C103.635 29.3133 103.748 28.6133 103.975 28C104.215 27.3733 104.555 26.84 104.995 26.4C105.435 25.9467 105.962 25.6067 106.575 25.38C107.188 25.14 107.875 25.02 108.635 25.02C109.648 25.02 110.528 25.2267 111.275 25.64C112.022 26.0533 112.602 26.64 113.015 27.4C113.428 28.16 113.635 29.06 113.635 30.1C113.635 30.8867 113.515 31.5933 113.275 32.22C113.048 32.8467 112.715 33.3867 112.275 33.84C111.835 34.28 111.308 34.62 110.695 34.86C110.082 35.0867 109.395 35.2 108.635 35.2ZM108.635 33.3C109.128 33.3 109.562 33.18 109.935 32.94C110.308 32.7 110.595 32.3467 110.795 31.88C111.008 31.4 111.115 30.8067 111.115 30.1C111.115 29.0333 110.888 28.24 110.435 27.72C109.982 27.1867 109.382 26.92 108.635 26.92C108.142 26.92 107.708 27.04 107.335 27.28C106.962 27.5067 106.668 27.86 106.455 28.34C106.255 28.8067 106.155 29.3933 106.155 30.1C106.155 31.1533 106.382 31.9533 106.835 32.5C107.288 33.0333 107.888 33.3 108.635 33.3ZM119.238 35.2C118.425 35.2 117.752 35.0533 117.218 34.76C116.685 34.4533 116.285 34 116.018 33.4C115.765 32.8 115.638 32.0533 115.638 31.16V26.32C115.638 25.8933 115.745 25.58 115.958 25.38C116.172 25.1667 116.478 25.06 116.878 25.06C117.278 25.06 117.585 25.1667 117.798 25.38C118.025 25.58 118.138 25.8933 118.138 26.32V31.2C118.138 31.8933 118.278 32.4067 118.558 32.74C118.838 33.0733 119.285 33.24 119.898 33.24C120.565 33.24 121.112 33.0133 121.538 32.56C121.965 32.0933 122.178 31.48 122.178 30.72V26.32C122.178 25.8933 122.285 25.58 122.498 25.38C122.712 25.1667 123.018 25.06 123.418 25.06C123.818 25.06 124.125 25.1667 124.338 25.38C124.565 25.58 124.678 25.8933 124.678 26.32V33.88C124.678 34.7333 124.272 35.16 123.458 35.16C123.072 35.16 122.772 35.0533 122.558 34.84C122.345 34.6133 122.238 34.2933 122.238 33.88V32.36L122.518 32.96C122.238 33.68 121.812 34.2333 121.238 34.62C120.678 35.0067 120.012 35.2 119.238 35.2ZM131.76 35.2C130.894 35.2 130.167 35.0533 129.58 34.76C129.007 34.4667 128.58 34.04 128.3 33.48C128.02 32.9067 127.88 32.2 127.88 31.36V27.1H126.84C126.52 27.1 126.274 27.02 126.1 26.86C125.927 26.6867 125.84 26.4533 125.84 26.16C125.84 25.8533 125.927 25.62 126.1 25.46C126.274 25.3 126.52 25.22 126.84 25.22H127.88V23.4C127.88 22.9867 127.987 22.6733 128.2 22.46C128.427 22.2467 128.74 22.14 129.14 22.14C129.54 22.14 129.847 22.2467 130.06 22.46C130.274 22.6733 130.38 22.9867 130.38 23.4V25.22H132.5C132.82 25.22 133.067 25.3 133.24 25.46C133.414 25.62 133.5 25.8533 133.5 26.16C133.5 26.4533 133.414 26.6867 133.24 26.86C133.067 27.02 132.82 27.1 132.5 27.1H130.38V31.22C130.38 31.86 130.52 32.34 130.8 32.66C131.08 32.98 131.534 33.14 132.16 33.14C132.387 33.14 132.587 33.12 132.76 33.08C132.934 33.04 133.087 33.0133 133.22 33C133.38 32.9867 133.514 33.04 133.62 33.16C133.727 33.2667 133.78 33.4933 133.78 33.84C133.78 34.1067 133.734 34.3467 133.64 34.56C133.56 34.76 133.407 34.9 133.18 34.98C133.007 35.0333 132.78 35.08 132.5 35.12C132.22 35.1733 131.974 35.2 131.76 35.2ZM145.306 35.16C144.893 35.16 144.573 35.0467 144.346 34.82C144.133 34.58 144.026 34.2533 144.026 33.84V23.04H140.126C139.779 23.04 139.506 22.9467 139.306 22.76C139.119 22.56 139.026 22.2933 139.026 21.96C139.026 21.6133 139.119 21.3533 139.306 21.18C139.506 20.9933 139.779 20.9 140.126 20.9H150.486C150.833 20.9 151.099 20.9933 151.286 21.18C151.486 21.3533 151.586 21.6133 151.586 21.96C151.586 22.2933 151.486 22.56 151.286 22.76C151.099 22.9467 150.833 23.04 150.486 23.04H146.586V33.84C146.586 34.2533 146.479 34.58 146.266 34.82C146.053 35.0467 145.733 35.16 145.306 35.16ZM156.065 35.2C154.959 35.2 154.005 34.9933 153.205 34.58C152.405 34.1667 151.785 33.58 151.345 32.82C150.919 32.06 150.705 31.16 150.705 30.12C150.705 29.1067 150.912 28.22 151.325 27.46C151.752 26.7 152.332 26.1067 153.065 25.68C153.812 25.24 154.659 25.02 155.605 25.02C156.299 25.02 156.919 25.1333 157.465 25.36C158.025 25.5867 158.499 25.9133 158.885 26.34C159.285 26.7667 159.585 27.2867 159.785 27.9C159.999 28.5 160.105 29.18 160.105 29.94C160.105 30.18 160.019 30.3667 159.845 30.5C159.685 30.62 159.452 30.68 159.145 30.68H152.725V29.24H158.345L158.025 29.54C158.025 28.9267 157.932 28.4133 157.745 28C157.572 27.5867 157.312 27.2733 156.965 27.06C156.632 26.8333 156.212 26.72 155.705 26.72C155.145 26.72 154.665 26.8533 154.265 27.12C153.879 27.3733 153.579 27.74 153.365 28.22C153.165 28.6867 153.065 29.2467 153.065 29.9V30.04C153.065 31.1333 153.319 31.9533 153.825 32.5C154.345 33.0333 155.105 33.3 156.105 33.3C156.452 33.3 156.839 33.26 157.265 33.18C157.705 33.0867 158.119 32.9333 158.505 32.72C158.785 32.56 159.032 32.4933 159.245 32.52C159.459 32.5333 159.625 32.6067 159.745 32.74C159.879 32.8733 159.959 33.04 159.985 33.24C160.012 33.4267 159.972 33.62 159.865 33.82C159.772 34.02 159.605 34.1933 159.365 34.34C158.899 34.6333 158.359 34.8533 157.745 35C157.145 35.1333 156.585 35.2 156.065 35.2ZM165.665 35.2C165.092 35.2 164.485 35.14 163.845 35.02C163.205 34.9 162.632 34.6933 162.125 34.4C161.912 34.2667 161.758 34.1133 161.665 33.94C161.585 33.7533 161.552 33.5733 161.565 33.4C161.592 33.2133 161.658 33.0533 161.765 32.92C161.885 32.7867 162.032 32.7 162.205 32.66C162.392 32.62 162.592 32.6533 162.805 32.76C163.338 33.0133 163.838 33.1933 164.305 33.3C164.772 33.3933 165.232 33.44 165.685 33.44C166.325 33.44 166.798 33.3333 167.105 33.12C167.425 32.8933 167.585 32.6 167.585 32.24C167.585 31.9333 167.478 31.7 167.265 31.54C167.065 31.3667 166.758 31.24 166.345 31.16L164.345 30.78C163.518 30.62 162.885 30.32 162.445 29.88C162.018 29.4267 161.805 28.8467 161.805 28.14C161.805 27.5 161.978 26.9467 162.325 26.48C162.685 26.0133 163.178 25.6533 163.805 25.4C164.432 25.1467 165.152 25.02 165.965 25.02C166.552 25.02 167.098 25.0867 167.605 25.22C168.125 25.34 168.625 25.5333 169.105 25.8C169.305 25.9067 169.438 26.0467 169.505 26.22C169.585 26.3933 169.605 26.5733 169.565 26.76C169.525 26.9333 169.445 27.0933 169.325 27.24C169.205 27.3733 169.052 27.46 168.865 27.5C168.692 27.5267 168.492 27.4867 168.265 27.38C167.852 27.1667 167.452 27.0133 167.065 26.92C166.692 26.8267 166.332 26.78 165.985 26.78C165.332 26.78 164.845 26.8933 164.525 27.12C164.218 27.3467 164.065 27.6467 164.065 28.02C164.065 28.3 164.158 28.5333 164.345 28.72C164.532 28.9067 164.818 29.0333 165.205 29.1L167.205 29.48C168.072 29.64 168.725 29.9333 169.165 30.36C169.618 30.7867 169.845 31.36 169.845 32.08C169.845 33.0533 169.465 33.82 168.705 34.38C167.945 34.9267 166.932 35.2 165.665 35.2ZM176.233 35.2C175.366 35.2 174.64 35.0533 174.053 34.76C173.48 34.4667 173.053 34.04 172.773 33.48C172.493 32.9067 172.353 32.2 172.353 31.36V27.1H171.313C170.993 27.1 170.746 27.02 170.573 26.86C170.4 26.6867 170.313 26.4533 170.313 26.16C170.313 25.8533 170.4 25.62 170.573 25.46C170.746 25.3 170.993 25.22 171.313 25.22H172.353V23.4C172.353 22.9867 172.46 22.6733 172.673 22.46C172.9 22.2467 173.213 22.14 173.613 22.14C174.013 22.14 174.32 22.2467 174.533 22.46C174.746 22.6733 174.853 22.9867 174.853 23.4V25.22H176.973C177.293 25.22 177.54 25.3 177.713 25.46C177.886 25.62 177.973 25.8533 177.973 26.16C177.973 26.4533 177.886 26.6867 177.713 26.86C177.54 27.02 177.293 27.1 176.973 27.1H174.853V31.22C174.853 31.86 174.993 32.34 175.273 32.66C175.553 32.98 176.006 33.14 176.633 33.14C176.86 33.14 177.06 33.12 177.233 33.08C177.406 33.04 177.56 33.0133 177.693 33C177.853 32.9867 177.986 33.04 178.093 33.16C178.2 33.2667 178.253 33.4933 178.253 33.84C178.253 34.1067 178.206 34.3467 178.113 34.56C178.033 34.76 177.88 34.9 177.653 34.98C177.48 35.0333 177.253 35.08 176.973 35.12C176.693 35.1733 176.446 35.2 176.233 35.2ZM180.709 35.16C180.296 35.16 179.976 35.0533 179.749 34.84C179.536 34.6133 179.429 34.2933 179.429 33.88V26.32C179.429 25.9067 179.536 25.5933 179.749 25.38C179.962 25.1667 180.262 25.06 180.649 25.06C181.036 25.06 181.336 25.1667 181.549 25.38C181.762 25.5933 181.869 25.9067 181.869 26.32V27.58H181.669C181.856 26.78 182.222 26.1733 182.769 25.76C183.316 25.3467 184.042 25.1 184.949 25.02C185.229 24.9933 185.449 25.0667 185.609 25.24C185.782 25.4 185.882 25.6533 185.909 26C185.936 26.3333 185.856 26.6067 185.669 26.82C185.496 27.02 185.229 27.14 184.869 27.18L184.429 27.22C183.616 27.3 183.002 27.5533 182.589 27.98C182.176 28.3933 181.969 28.98 181.969 29.74V33.88C181.969 34.2933 181.862 34.6133 181.649 34.84C181.436 35.0533 181.122 35.16 180.709 35.16ZM191.925 35.2C190.818 35.2 189.865 34.9933 189.065 34.58C188.265 34.1667 187.645 33.58 187.205 32.82C186.778 32.06 186.565 31.16 186.565 30.12C186.565 29.1067 186.771 28.22 187.185 27.46C187.611 26.7 188.191 26.1067 188.925 25.68C189.671 25.24 190.518 25.02 191.465 25.02C192.158 25.02 192.778 25.1333 193.325 25.36C193.885 25.5867 194.358 25.9133 194.745 26.34C195.145 26.7667 195.445 27.2867 195.645 27.9C195.858 28.5 195.965 29.18 195.965 29.94C195.965 30.18 195.878 30.3667 195.705 30.5C195.545 30.62 195.311 30.68 195.005 30.68H188.585V29.24H194.205L193.885 29.54C193.885 28.9267 193.791 28.4133 193.605 28C193.431 27.5867 193.171 27.2733 192.825 27.06C192.491 26.8333 192.071 26.72 191.565 26.72C191.005 26.72 190.525 26.8533 190.125 27.12C189.738 27.3733 189.438 27.74 189.225 28.22C189.025 28.6867 188.925 29.2467 188.925 29.9V30.04C188.925 31.1333 189.178 31.9533 189.685 32.5C190.205 33.0333 190.965 33.3 191.965 33.3C192.311 33.3 192.698 33.26 193.125 33.18C193.565 33.0867 193.978 32.9333 194.365 32.72C194.645 32.56 194.891 32.4933 195.105 32.52C195.318 32.5333 195.485 32.6067 195.605 32.74C195.738 32.8733 195.818 33.04 195.845 33.24C195.871 33.4267 195.831 33.62 195.725 33.82C195.631 34.02 195.465 34.1933 195.225 34.34C194.758 34.6333 194.218 34.8533 193.605 35C193.005 35.1333 192.445 35.2 191.925 35.2ZM199.185 35.16C198.785 35.16 198.478 35.0533 198.265 34.84C198.051 34.6133 197.945 34.2933 197.945 33.88V22C197.945 21.5867 198.051 21.2733 198.265 21.06C198.478 20.8467 198.785 20.74 199.185 20.74C199.585 20.74 199.891 20.8467 200.105 21.06C200.331 21.2733 200.445 21.5867 200.445 22V29.38H200.485L203.785 25.9C204.051 25.6333 204.285 25.4267 204.485 25.28C204.685 25.1333 204.958 25.06 205.305 25.06C205.651 25.06 205.911 25.1533 206.085 25.34C206.271 25.5133 206.365 25.7267 206.365 25.98C206.365 26.2333 206.245 26.4867 206.005 26.74L202.525 30.42V29.38L206.345 33.5C206.585 33.7533 206.691 34.0133 206.665 34.28C206.651 34.5333 206.545 34.7467 206.345 34.92C206.145 35.08 205.891 35.16 205.585 35.16C205.211 35.16 204.911 35.0867 204.685 34.94C204.471 34.7933 204.231 34.5733 203.965 34.28L200.485 30.64H200.445V33.88C200.445 34.7333 200.025 35.16 199.185 35.16Z"
      fill="#212121"
    />
    <Path
      d="M368.641 34.2749C368.419 34.0531 368.399 33.7058 368.581 33.4612L368.641 33.3911L374.032 27.9997L368.641 22.6083C368.419 22.3864 368.399 22.0392 368.581 21.7945L368.641 21.7244C368.863 21.5025 369.21 21.4823 369.455 21.6639L369.525 21.7244L375.358 27.5577C375.58 27.7796 375.6 28.1268 375.419 28.3715L375.358 28.4416L369.525 34.2749C369.281 34.519 368.885 34.519 368.641 34.2749Z"
      fill="#212121"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2167_31890"
        x1={38}
        y1={37.999}
        x2={14.2018}
        y2={31.099}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6949FF" />
        <Stop offset={1} stopColor="#876DFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default AboutIcon;