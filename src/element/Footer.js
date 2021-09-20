import classes from './Footer.module.css';
function Footer(){
    return(
    <footer className={classes.footer}>
        <div className={classes.numbers}>
            <span className={classes.number1}>
                0919 3263 690
            </span>
            <span className={classes.number2}>
                021 2254 6498
            </span>
        </div>
        <div className={classes.description}>
        شرکت در معنای کلی به قراردادی گفته می شود که بر مبنای آن شرکا سود حاصل از شرکت را بین خودشان تقسیم می کنند . در قانون ایران دو نوع شرکت تجاری و مدنی وجود دارد که موضوع بحث ما را شرکت های تجاری تشکیل می دهند . شرکت های تجاری شامل 7 نوع مختلف می شوند که هر کدام آثار و احکام متفاوتی دارند .
        </div>
    </footer>
    )
}
export default Footer;