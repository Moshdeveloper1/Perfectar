<?php
session_start();

if (!isset($_SESSION['emailID'])) {
    # code... 
header('Location:./login');
exit();
}
if (isset($_SESSION['emailID'])&& isset($_SESSION['refNum'])&& isset($_SESSION['userName'])) {
        # code...
    //  require 'tab_update.php';
    
?>
<!-- <!DOCTYPE html> -->
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfecta| <?php echo ucfirst( $_SESSION['userName']);?> dashboard</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <link rel="stylesheet" href="dash.css">
</head>
<!-- composer install perfectmak/paystack-php -->
<body>
    <div class="main-cont">
        <header>
            <div class="header-container">
                <div class="logo-cont">
                    <!-- <menu type="toolbar"> -->
                    <!-- <img src="./download (3).png" alt="" srcset=""> -->
                    <!-- </menu>
                     -->
                    <menu class="menu-bar">&#9776;</menu>

                    <div>
                        <aside>
                            <span class="cancel-bar">&times;</span>
                            <div>
                                <img id="prof-logo" src="<?php echo $_SESSION['prof_img'];?>" alt="">
                            </div>
                            <ul>
                                <li class="rem create">Create your site</li>
                                <li class="rem activities">Activities</li>
                                <li class="rem offers">Promotions & offers</li>
                                <li class="rem refer">Refer & earn</li>
                                <li class="rem change">Profile picture</li>
                                <li class="rem "><a href="logout.php"><i class='bx bx-log-out'></i>Log out</a></li>
                                <li class="rem delete">Delete account</li>

                            </ul>
                            <div class="del-pop">
                                <div class="pop-out">
                                    <h4> Are you sure you want to continue this action?. <br> This action will cause all
                                        your information to be permanently
                                        deleted </h4>
                                    <div class="button"><span class="no-del">Cancel</span><span class="yes-del"><a
                                                href="del.php">Continue</a></span></div>
                                </div>

                            </div>
                            <footer>&copy;Powered by Big3 tech corporation Inc.</footer>
                        </aside>
                    </div>
                </div>
                <div class="warm-intro">
                    <h3>Welcome <?php echo ucfirst($_SESSION['userName']);?></h3>
                </div>
                <div class="log-cont">
                    <div class="mode"><i title="theme-mode" class='bx bxs-moon icon'></i></div>

                    <div class="logo-cont">
                        <img id='header-logo' src="<?php echo $_SESSION['prof_img'];?>" title="profile-pics" alt="" srcset="" loading="eager">
                    </div>
                </div>
            </div>

        </header>
        <main>
            
            <div class="activities-log">
                <div class="activities-info">
                    <div class="act-box">

                        <div class="ref-num"><i class='bx bx-group'></i>
                            <h4>N<u>o</u> of refferrals</h4><span>0</span>
                        </div>
                        <div class="tot-transact"><i class='bx bxs-bank'></i>
                            <h4>N<u>o</u> transactions</h4><span>0</span>
                        </div>
                        <div class="ref-earning"><i class='bx bx-money'></i>
                            <h4>Reffered earnings</h4><span>$0</span>
                        </div>
                    </div>
                    <div class="activities-nav">
                        <div class="">
                            <i class='bx bx-filter-alt filt'></i>
                            <div></div>
                        </div>

                        <div class="act-nav">
                            <div class="no-transact">
                                <h4>No transaction yet</h4><i class='bx bx-folder-minus trans'></i>
                            </div>
                    </div>
                </div>

                <template class="act-table">
                </template>
                </div>
            </div>

        </main>
        <div class="site-container" style="display: none;">
    <h1>Site Creation</h1>
    <div class="site-entails">

        <div class="site-create">
            <div class="site-fills">
            <h2>Fill all question correctly and get your site created perfectly</h2>
            <ul>
                <li class="info-title">
                    <h4>Give a suitable title for your site</h4><input class="inp9-val1" type="text" required>
                    <small class="comment9"></small>
                </li>
                <li class="info-select">
                    <h4>Choose the type of voting system you want</h4>
                    <select name="" id="inp10-val1" required>
                        <option value=""></option>
                        <option value="Education">Education</option>
                        <option value="Election">Election</option>
                        <option value="Live show">Live show</option>
                        <option value="Beauty pageant">Beauty pageant</option>
                    </select>
                </li>
                <li class="info-temp temp1">
                    <h4>Is there any requirement to vote needed. <small>E.g Email or Id number?</small> </h4>
                    <input type="radio" name="vote-req" id="vote-req-yes" class="yes" required><label
                        for="vote-req-yes">Yes</label><input type="radio" name="vote-req" id="vote-req-no" class="no"
                        required><label for="vote-req-no">No</label>
                    <small class="comment1"></small>
                    <template id="mini-input-1">
                        <div>
                            <h6>What are they?</h6><input class="inp1-val1" type="text" maxlength="14" required><input
                                class="inp1-val2" type="text" maxlength="14"><input class="inp1-val3" type="text"
                                maxlength="14"> <span class="inp1-span">Ok</span>
                        </div>
                    </template>
                </li>
                <li class="info-temp temp2">
                    <h4>Is there a need for authenticating voter's?</h4>
                    <input type="radio" name="auth-req" id="auth-req-yes" class="yes" required><label
                        for="auth-req-yes">Yes</label><input type="radio" name="auth-req" id="auth-req-no" class="no"
                        required><label for="auth-req-no">No</label>
                    <small class="comment2"></small>
                    <template id="mini-input-2">
                        <div>
                            <h6>Input your database link to authenticate user</h6><input class="inp2-val1"
                                type="url"><span class="inp2-span">Ok</span>
                        </div>
                    </template>
                </li>
                <li class="info-temp temp3">
                    <h4>Do you have your brand logo?</h4>
                    <input type="radio" name="brand-logo" id="brand-logo-yes" class="yes" required><label
                        for="brand-logo-yes">Yes</label><input type="radio" name="brand-logo" id="brand-logo-no"
                        class="no" required><label for="brand-logo-no">No</label>
                    <small class="comment3"></small>
                    <template id="mini-input-3">
                        <div>
                            <h6>Upload brand logo</h6><input class="inp3-val1" type="file"><small
                                class="small-text"></small><span class="inp3-span">Ok</span>
                        </div>
                    </template>
                </li>

                <li class="info-category">
                    <h4>How many categories of nomination?</h4><input type="number" class="inp4-val1" name=""
                        id="nomination-cat" min="1" required>
                </li>

                <li class="info-temp temp4">
                    <h4>Do each nomination has same number of contestant?</h4>
                    <input type="radio" name="same-num" id="same-num-yes" class="yes" required><label
                        for="same-num-yes">Yes</label><input type="radio" name="same-num" id="same-num-no" class="no"
                        required><label for="same-num-no">No</label>
                    <small class="comment4"></small>
                    <template id="mini-input-4">
                        <div>
                            <h6>How many contestant for each category?</h6><input class="inp5-val1" type="number"
                                min="2" required><span class="inp4-span">Ok</span><small style="display: block;"
                                class="comment11"></small>
                        </div>
                    </template>
                </li>
                <li class="info-temp temp5">
                    <h4>Does it require any payment?</h4>
                    <input type="radio" name="pay-req" id="pay-req-yes" class="yes" required><label
                        for="pay-req-yes">Yes</label><input type="radio" name="pay-req" id="pay-req-no" class="no"
                        required><label for="pay-req-no">No</label>
                    <small class="comment5"></small>
                </li>
                <li class="info-temp temp6">
                    <h4>This brand is owned by who?</h4><input type="radio" name="brand-reg" id="brand-reg-yes"
                        class="yes" required><label for="brand-reg-yes">Government</label><input type="radio"
                        name="brand-reg" id="brand-reg-no" class="no"><label for="brand-reg-no">Private</label>
                    <!-- <span  id="brand-type-yes yes">Government</span><span  id="brand-type-no no">Private</span> -->

                </li>

                <li class="info-temp temp7">
                    <h4>Is your brand registered to government?</h4><input type="radio" name="brand-type"
                        id="brand-type-yes" class="yes" required><label for="brand-type-yes">Yes</label><input
                        type="radio" name="brand-type" id="brand-type-no" class="no" required><label
                        for="brand-type-no">No</label>
                    <small class="comment7"></small>
                    <template id="mini-input-7">

                        <div>
                            <h6>Provide your Identification. E.g CAC number</h6><input class="inp7-val1" type="text"
                                required><span class="inp7-span">Ok</span>
                        </div>
                    </template>

                </li>


            </ul>


            <div class="button"><span class="info-extract">Done</span></div>
            </div>
        </div>


        <div class="site-preview">
            <div class="prev-look">

            </div>
            <h3></h3>
            <span class="img-change">Change</span>
            <div class='all-pay'>
                <div class='div-amount'>
                    <h5 class="amount-h5">Amount to be paid: $<span class='amount-number'></span></h5>
                    <h5>Use refferal earning $<span class='ref-money'>0</span></h5>
                </div>
                <span class="payment-way">Proceed to payment</span><br>
                <div class="payment-option">
                    <ul>
                        <li><a href="#paypal-opt"><i class='bx bxs-paypal-logo'></i>Paypal</a></li>
                        <li><a href="#gateway-opt"><i class='bx bxs-neural-link'></i>Online transfer</a></li>
                        <li><a href="#local-opt"><i class='bx bxs-bank'></i>local transfer</a></li>
                        <li><a href="#bitcoin-opt"><i class='bx bx-bitcoin'></i>Bitcoin</a></li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- </template> -->
      
    <!-- <template class="final-temp">
        <div class="final-container">
                                <form id="last-form">
                                    <table class="form-table">
                                        <tr>
                                            <td>The type of voting system</td>
                                            <td><input type="text" value="" disabled></td>
                                        </tr>
                                    </table>
                                </form>
                            </div>
    </template> -->
    
        <div class="offers-on">
            <div class="promo-offers">
                <div class="no-promo">
                    <h4>No promotion yet</h4>
                    <i class='bx bx-speaker ' id="speak"></i>
                </div>

            </div>
        </div>
        <div class="ref-earn" style="display: none;">
            <div class="refferer">
                <div class="ref-flex">
                    <div>

                        <h4>Current referrals</h4><span>0</span>
                    </div>
                    <div>
                        <i class='bx bx-verified'></i>
                        <h4>Eligible refferrals</h4><span>0</span>
                    </div>
                    <div>
                        <i class='bx bx-money'></i>
                        <h4>Redeemable point</h4><span>$0</span>
                    </div>

                </div>
                <div class="ref">
                    <i class='bx bx-group'></i>
                    <h4>Refer other brands or individuals and get 500 point for each referral after successful voting
                        site
                        creation
                        which can be used in paying your own transaction.</h4>
                    <h4>500point = $0.5</h4>

                    <div>
                        <i title="copy url" class='bx bx-link' id="copy-link"></i>

                        <p><span id="ref-link"><?php echo $_SESSION['refNum'];?></span></p>
                        <small id="comment-link">Hi</small>
                    </div>
                </div>
            </div>
        </div>
        <div class="prof-pics" style="display: none;">
            <div class="avat-cont">
                <form id="pic-form">
                    <p>Logo file size must not exceed 1mb</p>
                    <input class="avatar-pic" title="No logo chosen" type="file" name="avat-pic">
                    <small aria-readonly="true"></small>
                    <div class="img-grid">
                        <div><img src="./img/download (5).png" alt="" class="img-avat" srcset=""></div>
                        <div><img src="./img/download (4).png" alt="" class="img-avat" srcset=""></div>
                        <div><img src="./img/download (3).png" alt="" class="img-avat" srcset=""></div>
                        <div><img src="./img/download (2).png" alt="" class="img-avat" srcset=""></div>
                        <div class="side1"><img src="./img/download (5).png" alt="" class="img-avat" srcset=""></div>
                        <div><img src="./img/download (5).png" alt="" class="img-avat" srcset=""></div>
                        <div><img src="./img/download (5).png" alt="" class="img-avat" srcset=""></div>
                        <div class="side2"><img src="./img/download (5).png" alt="" class="img-avat" srcset=""></div>
                        <div><img src="./img/download (1).png" alt="" class="img-avat" srcset=""></div>
                        <div class="side3"><img src="./img/download (5).png" alt="" class="img-avat" srcset=""></div>
                        <div><img src="./img/download (5).png" alt="" class="img-avat" srcset=""></div>
                        <div><img src="./img/download (5).png" alt="" class="img-avat" srcset=""></div>
                        <div><img src="./img/download (5).png" alt="" class="img-avat" srcset=""></div>
                        <div><img src="./img/download (5).png" alt="" class="img-avat" srcset=""></div>
                        <div><img src="./img/download (5).png" alt="" class="img-avat" srcset=""></div>
                        <div><img src="./img/download (5).png" alt="" class="img-avat" srcset=""></div>
                    </div>

                </form>
                <input name='submit' type="submit" value="Change profile picture" class="submit-pic">
            </div>

        </div>
</body>
<script src="controller.js"></script>

</html>
<?php
 }
?>